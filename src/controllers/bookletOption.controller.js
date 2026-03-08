import BookletOption from "../models/bookletOption.model.js";
import { getAllOptionsSrv } from "../services/bookletOption.service.js";
import { categoryConfig } from "../utils/categoryConfig.js";


export const getAllOptions = async (req, res, next)=> {
  try {
    const db_res = await getAllOptionsSrv()
    res.status(200).json({
      options: db_res
    })
  } catch (error) {
    next(error)
  }
}


// Helper to get or create category with defaults
const getOrCreateOption = async (routeName) => {
  const config = categoryConfig[routeName];
  if (!config) return null;
  
  let option = await BookletOption.findOne({ category: config.category });
  
  if (!option) {
    option = new BookletOption({
      category: config.category,
      values: config.defaults
    });
    await option.save();
  }
  
  return option;
};

export const getOptionByCategory = async (req, res) => {
  try {
    const routeName = req.path.replace("/", "");
    const option = await getOrCreateOption(routeName);
    
    if (!option) {
      return res.status(400).json({ success: false, message: "Invalid category" });
    }
    
    res.json({ success: true, data: option.values });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const addOptionValue = async (req, res) => {
  try {
    const routeName = req.path.replace("/", "");
    const { value } = req.body;
    
    const option = await getOrCreateOption(routeName);
    
    if (!option) {
      return res.status(400).json({ success: false, message: "Invalid category" });
    }
    
    if (!option.values.includes(value)) {
      option.values.push(value);
      await option.save();
    }
    
    res.json({ success: true, message: "Value added", data: option.values });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateOptionValue = async (req, res) => {
  try {
    const routeName = req.path.split("/")[1];
    const { index } = req.params;
    const { value } = req.body;
    
    const option = await getOrCreateOption(routeName);
    
    if (!option) {
      return res.status(400).json({ success: false, message: "Invalid category" });
    }
    
    if (index < 0 || index >= option.values.length) {
      return res.status(400).json({ success: false, message: "Invalid index" });
    }
    
    option.values[index] = value;
    await option.save();
    
    res.json({ success: true, message: "Value updated", data: option.values });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteOptionValue = async (req, res) => {
  try {
    const routeName = req.path.split("/")[1];
    const { index } = req.params;
    
    const option = await getOrCreateOption(routeName);
    
    if (!option) {
      return res.status(400).json({ success: false, message: "Invalid category" });
    }
    
    if (index < 0 || index >= option.values.length) {
      return res.status(400).json({ success: false, message: "Invalid index" });
    }
    
    option.values.splice(index, 1);
    await option.save();
    
    res.json({ success: true, message: "Value deleted", data: option.values });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
