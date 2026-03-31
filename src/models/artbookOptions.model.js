import mongoose from "mongoose";

// Schema for subcategories containing attributes with field type configuration
const subcategorySchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      default: "",
    },
    fieldType: {
      type: String,
      enum: [
        "select",
        "checkbox",
        "boolean",
        "number",
        "text",
        "textarea",
        "radio",
      ],
      default: "select",
    },
    attributes: {
      type: [String],
      default: [],
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false },
);

// Schema for main categories containing subcategories and direct attributes
const categorySchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      default: "",
    },
    fieldType: {
      type: String,
      enum: [
        "select",
        "checkbox",
        "boolean",
        "number",
        "text",
        "textarea",
        "radio",
      ],
      default: "select",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
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

const ArtbookOptionSchema = new mongoose.Schema(
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
ArtbookOptionSchema.statics.getAllOptions = async function () {
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
        displayName: categoryData.displayName || categoryKey,
        fieldType: categoryData.fieldType || "select",
        placeholder: categoryData.placeholder || "",
        required: categoryData.required || false,
        attributes: categoryData.attributes || [],
        subcategories: {},
      };

      if (categoryData.subcategories) {
        categoryData.subcategories.forEach((subcatData, subcatKey) => {
          result[categoryKey].subcategories[subcatKey] = {
            displayName: subcatData.displayName || subcatKey,
            fieldType: subcatData.fieldType || "select",
            placeholder: subcatData.placeholder || "",
            required: subcatData.required || false,
            attributes: subcatData.attributes || [],
          };
        });
      }
    });
  }

  return result;
};

// Static method to add a new main category
ArtbookOptionSchema.statics.addCategory = async function (
  categoryKey,
  displayName,
  fieldType = "select",
  placeholder = "",
  required = false,
) {
  let options = await this.findOne();

  if (!options) {
    options = await this.create({
      categories: new Map([
        [
          categoryKey,
          {
            displayName,
            fieldType,
            placeholder,
            required,
            subcategories: new Map(),
          },
        ],
      ]),
    });
  } else {
    if (!options.categories) {
      options.categories = new Map();
    }

    if (options.categories.has(categoryKey)) {
      throw new Error(`Category "${categoryKey}" already exists`);
    }

    options.categories.set(categoryKey, {
      displayName,
      fieldType,
      placeholder,
      required,
      subcategories: new Map(),
    });
    options.markModified("categories");
    await options.save();
  }

  return options;
};

// Static method to update a category
ArtbookOptionSchema.statics.updateCategory = async function (
  categoryKey,
  updates,
) {
  let options = await this.findOne();

  if (!options) {
    throw new Error("Options not found");
  }

  if (!options.categories || !options.categories.has(categoryKey)) {
    throw new Error(`Category "${categoryKey}" does not exist`);
  }

  const category = options.categories.get(categoryKey);

  // Update fields if provided
  if (updates.displayName) {
    category.displayName = updates.displayName;
  }
  if (updates.fieldType) {
    category.fieldType = updates.fieldType;
  }
  if (updates.placeholder !== undefined) {
    category.placeholder = updates.placeholder;
  }
  if (updates.required !== undefined) {
    category.required = updates.required;
  }

  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to add a subcategory under a category
ArtbookOptionSchema.statics.addSubcategory = async function (
  categoryKey,
  subcategoryKey,
  displayName,
  fieldType = "select",
  placeholder = "",
  required = false,
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

  category.subcategories.set(subcategoryKey, {
    displayName: displayName || subcategoryKey,
    fieldType,
    placeholder,
    required,
    attributes: [],
  });
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to update subcategory field configuration
ArtbookOptionSchema.statics.updateSubcategoryField = async function (
  categoryKey,
  subcategoryKey,
  updates,
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

  // Update fields if provided
  if (updates.displayName) {
    subcategory.displayName = updates.displayName;
  }
  if (updates.fieldType) {
    subcategory.fieldType = updates.fieldType;
  }
  if (updates.placeholder !== undefined) {
    subcategory.placeholder = updates.placeholder;
  }
  if (updates.required !== undefined) {
    subcategory.required = updates.required;
  }

  category.subcategories.set(subcategoryKey, subcategory);
  options.categories.set(categoryKey, category);
  options.markModified("categories");
  await options.save();

  return options;
};

// Static method to delete a category
ArtbookOptionSchema.statics.deleteCategory = async function (categoryKey) {
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
ArtbookOptionSchema.statics.deleteSubcategory = async function (
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
ArtbookOptionSchema.statics.addAttribute = async function (
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
ArtbookOptionSchema.statics.updateAttribute = async function (
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
ArtbookOptionSchema.statics.deleteAttribute = async function (
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
ArtbookOptionSchema.statics.addCategoryAttribute = async function (
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
ArtbookOptionSchema.statics.updateCategoryAttribute = async function (
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
ArtbookOptionSchema.statics.deleteCategoryAttribute = async function (
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

export default mongoose.model("ArtbookOption", ArtbookOptionSchema);
