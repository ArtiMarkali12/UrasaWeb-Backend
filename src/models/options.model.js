import mongoose from "mongoose";

const optionsSchema = new mongoose.Schema(
  {
    // Dynamic categories - stored as key-value pairs
    categories: {
      type: Map,
      of: [String],
      default: new Map(),
    },
  },
  { timestamps: true },
);

// Static method to get all options as object
optionsSchema.statics.getAllOptions = async function () {
  let options = await this.findOne();

  if (!options) {
    // Create empty options if none exist
    options = await this.create({
      categories: new Map(),
    });
  }

  // Build result object from categories
  const result = {};

  if (options.categories) {
    options.categories.forEach((value, key) => {
      if (Array.isArray(value)) {
        result[key] = value;
      }
    });
  }

  return result;
};

// Static method to add a new category
optionsSchema.statics.addCategory = async function (categoryName) {
  let options = await this.findOne();

  if (!options) {
    // Create new options with only the new category
    options = await this.create({
      categories: new Map([[categoryName, []]]),
    });
  } else {
    if (!options.categories) {
      options.categories = new Map();
    }

    if (options.categories.has(categoryName)) {
      throw new Error(`Category "${categoryName}" already exists`);
    }

    options.categories.set(categoryName, []);
    await options.save();
  }

  return options;
};

// Static method to delete a category
optionsSchema.statics.deleteCategory = async function (categoryName) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryName)) {
    throw new Error(`Category "${categoryName}" does not exist`);
  }

  options.categories.delete(categoryName);
  await options.save();
  return options;
};

// Static method to add option value to any category
optionsSchema.statics.addOptionValue = async function (category, value) {
  let options = await this.findOne();

  if (!options) {
    // Create with the new category and value
    options = await this.create({
      categories: new Map([[category, [value]]]),
    });
  } else {
    if (!options.categories) {
      options.categories = new Map();
    }
    if (!options.categories.has(category)) {
      options.categories.set(category, []);
    }
    const arr = options.categories.get(category);
    if (arr.includes(value)) {
      throw new Error(`Value already exists in ${category}`);
    }
    arr.push(value);
    options.categories.set(category, arr);
    await options.save();
  }

  return options;
};

// Static method to update option value
optionsSchema.statics.updateOptionValue = async function (
  category,
  index,
  newValue,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(category)) {
    throw new Error(`Invalid category: ${category}`);
  }

  const arr = options.categories.get(category);

  if (!arr || index < 0 || index >= arr.length) {
    throw new Error(`Invalid index: ${index}`);
  }

  if (arr.includes(newValue) && arr[index] !== newValue) {
    throw new Error(`Value already exists in ${category}`);
  }

  arr[index] = newValue;
  options.categories.set(category, arr);

  await options.save();
  return options;
};

// Static method to delete option value
optionsSchema.statics.deleteOptionValue = async function (category, index) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(category)) {
    throw new Error(`Invalid category: ${category}`);
  }

  const arr = options.categories.get(category);

  if (!arr || index < 0 || index >= arr.length) {
    throw new Error(`Invalid index: ${index}`);
  }

  arr.splice(index, 1);
  options.categories.set(category, arr);

  await options.save();
  return options;
};

export default mongoose.model("Options", optionsSchema);
