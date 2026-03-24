import mongoose from "mongoose";

// Schema for subcategories containing attributes
const subcategorySchema = new mongoose.Schema(
  {
    attributes: {
      type: [String],
      default: [],
    },
  },
  { _id: false },
);

// Schema for main categories containing subcategories and direct attributes
const categorySchema = new mongoose.Schema(
  {
    subcategories: {
      type: Map,
      of: subcategorySchema,
      default: new Map(),
    },
    attributes: {
      type: [String],
      default: [],
    },
  },
  { _id: false },
);

const CustomEnvelopeOptionSchema = new mongoose.Schema(
  {
    // Hierarchical categories structure
    categories: {
      type: Map,
      of: categorySchema,
      default: new Map(),
    },
  },
  { timestamps: true },
);

// Static method to get all options as hierarchical object
CustomEnvelopeOptionSchema.statics.getAllOptions = async function () {
  let options = await this.findOne();

  if (!options) {
    options = await this.create({
      categories: new Map(),
    });
  }

  const result = {};

  if (options.categories) {
    options.categories.forEach((categoryData, categoryKey) => {
      result[categoryKey] = {
        attributes: categoryData.attributes || [],
        subcategories: {},
      };

      if (categoryData.subcategories) {
        categoryData.subcategories.forEach((subcatData, subcatKey) => {
          result[categoryKey].subcategories[subcatKey] = {
            attributes: subcatData.attributes || [],
          };
        });
      }
    });
  }

  return result;
};

// Static method to add a new main category
CustomEnvelopeOptionSchema.statics.addCategory = async function (categoryKey) {
  let options = await this.findOne();

  if (!options) {
    options = await this.create({
      categories: new Map([[categoryKey, { subcategories: new Map() }]]),
    });
  } else {
    if (!options.categories) {
      options.categories = new Map();
    }

    if (options.categories.has(categoryKey)) {
      throw new Error(`Category "${categoryKey}" already exists`);
    }

    options.categories.set(categoryKey, {
      subcategories: new Map(),
    });
    options.markModified("categories");
    await options.save();
  }

  return options;
};

// Static method to add a subcategory under a category
CustomEnvelopeOptionSchema.statics.addSubcategory = async function (
  categoryKey,
  subcategoryKey,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);
  if (!category.subcategories) {
    category.subcategories = new Map();
  }

  if (category.subcategories.has(subcategoryKey)) {
    throw new Error(
      `Subcategory "${subcategoryKey}" already exists in "${categoryKey}"`,
    );
  }

  category.subcategories.set(subcategoryKey, { attributes: [] });
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to delete a category
CustomEnvelopeOptionSchema.statics.deleteCategory = async function (
  categoryKey,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  options.categories.delete(categoryKey);
  options.markModified("categories");
  await options.save();
  return options;
};

// Static method to delete a subcategory
CustomEnvelopeOptionSchema.statics.deleteSubcategory = async function (
  categoryKey,
  subcategoryKey,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);
  if (!category.subcategories || !category.subcategories.has(subcategoryKey)) {
    throw new Error(`Subcategory "${subcategoryKey}" does not exist`);
  }

  category.subcategories.delete(subcategoryKey);
  options.categories.set(categoryKey, category);
  await options.save();

  return options;
};

// Static method to add an attribute to a subcategory
CustomEnvelopeOptionSchema.statics.addAttribute = async function (
  categoryKey,
  subcategoryKey,
  value,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);
  if (!category.subcategories || !category.subcategories.has(subcategoryKey)) {
    throw new Error(
      `Subcategory "${subcategoryKey}" does not exist in "${categoryKey}"`,
    );
  }

  const subcategory = category.subcategories.get(subcategoryKey);
  if (!subcategory.attributes) {
    subcategory.attributes = [];
  }

  if (subcategory.attributes.includes(value)) {
    throw new Error(`Value "${value}" already exists in "${subcategoryKey}"`);
  }

  subcategory.attributes.push(value);
  category.subcategories.set(subcategoryKey, subcategory);
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to update an attribute value
CustomEnvelopeOptionSchema.statics.updateAttribute = async function (
  categoryKey,
  subcategoryKey,
  index,
  newValue,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);
  if (!category.subcategories || !category.subcategories.has(subcategoryKey)) {
    throw new Error(`Subcategory "${subcategoryKey}" does not exist`);
  }

  const subcategory = category.subcategories.get(subcategoryKey);
  if (
    !subcategory.attributes ||
    index < 0 ||
    index >= subcategory.attributes.length
  ) {
    throw new Error(`Invalid index: ${index}`);
  }

  if (
    subcategory.attributes.includes(newValue) &&
    subcategory.attributes[index] !== newValue
  ) {
    throw new Error(`Value already exists`);
  }

  subcategory.attributes[index] = newValue;
  category.subcategories.set(subcategoryKey, subcategory);
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to delete an attribute
CustomEnvelopeOptionSchema.statics.deleteAttribute = async function (
  categoryKey,
  subcategoryKey,
  index,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);
  if (!category.subcategories || !category.subcategories.has(subcategoryKey)) {
    throw new Error(`Subcategory "${subcategoryKey}" does not exist`);
  }

  const subcategory = category.subcategories.get(subcategoryKey);
  if (
    !subcategory.attributes ||
    index < 0 ||
    index >= subcategory.attributes.length
  ) {
    throw new Error(`Invalid index: ${index}`);
  }

  subcategory.attributes.splice(index, 1);
  category.subcategories.set(subcategoryKey, subcategory);
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to add an attribute directly to a category
CustomEnvelopeOptionSchema.statics.addCategoryAttribute = async function (
  categoryKey,
  value,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);
  if (!category.attributes) {
    category.attributes = [];
  }

  if (category.attributes.includes(value)) {
    throw new Error(`Value "${value}" already exists in "${categoryKey}"`);
  }

  category.attributes.push(value);
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to update a category-level attribute
CustomEnvelopeOptionSchema.statics.updateCategoryAttribute = async function (
  categoryKey,
  index,
  newValue,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);
  if (
    !category.attributes ||
    index < 0 ||
    index >= category.attributes.length
  ) {
    throw new Error(`Invalid index: ${index}`);
  }

  if (
    category.attributes.includes(newValue) &&
    category.attributes[index] !== newValue
  ) {
    throw new Error(`Value already exists`);
  }

  category.attributes[index] = newValue;
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to delete a category-level attribute
CustomEnvelopeOptionSchema.statics.deleteCategoryAttribute = async function (
  categoryKey,
  index,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);
  if (
    !category.attributes ||
    index < 0 ||
    index >= category.attributes.length
  ) {
    throw new Error(`Invalid index: ${index}`);
  }

  category.attributes.splice(index, 1);
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

export default mongoose.model(
  "CustomEnvelopeOption",
  CustomEnvelopeOptionSchema,
);
