# API Endpoints Documentation for Postman

## Base URL: `http://localhost:5000`

---

## 📚 BOOKLET (booklet-quote)

### CRUD APIs

| Method | Endpoint                 | Description                                                             |
| ------ | ------------------------ | ----------------------------------------------------------------------- |
| POST   | `/api/booklet-quote/`    | Create a new booklet quote (multipart/form-data, supports file uploads) |
| GET    | `/api/booklet-quote/`    | Get all booklet quotes                                                  |
| GET    | `/api/booklet-quote/:id` | Get booklet quote by ID                                                 |
| DELETE | `/api/booklet-quote/:id` | Delete a booklet quote                                                  |

### Options APIs

| Method | Endpoint                     | Description             |
| ------ | ---------------------------- | ----------------------- |
| GET    | `/api/booklet-quote/options` | Get all booklet options |

### POST - Add Option Values

| Method | Endpoint                               |
| ------ | -------------------------------------- |
| POST   | `/api/booklet-quote/book-sizes`        |
| POST   | `/api/booklet-quote/binding-types`     |
| POST   | `/api/booklet-quote/cover-styles`      |
| POST   | `/api/booklet-quote/print-colors`      |
| POST   | `/api/booklet-quote/paper-weights`     |
| POST   | `/api/booklet-quote/paper-types`       |
| POST   | `/api/booklet-quote/cover-finishes`    |
| POST   | `/api/booklet-quote/page-edges`        |
| POST   | `/api/booklet-quote/packaging`         |
| POST   | `/api/booklet-quote/special-finishing` |

### PUT - Update Option Values

| Method | Endpoint                                   |
| ------ | ------------------------------------------ |
| PUT    | `/api/booklet-quote/book-sizes/:index`     |
| PUT    | `/api/booklet-quote/binding-types/:index`  |
| PUT    | `/api/booklet-quote/paper-types/:index`    |
| PUT    | `/api/booklet-quote/cover-finishes/:index` |
| PUT    | `/api/booklet-quote/page-edges/:index`     |

### DELETE - Delete Option Values

| Method | Endpoint                                   |
| ------ | ------------------------------------------ |
| DELETE | `/api/booklet-quote/book-sizes/:index`     |
| DELETE | `/api/booklet-quote/binding-types/:index`  |
| DELETE | `/api/booklet-quote/paper-types/:index`    |
| DELETE | `/api/booklet-quote/cover-finishes/:index` |
| DELETE | `/api/booklet-quote/page-edges/:index`     |

---

## 📰 BROCHURE

### CRUD APIs

| Method | Endpoint            | Description                                                              |
| ------ | ------------------- | ------------------------------------------------------------------------ |
| POST   | `/api/brochure/`    | Create a new brochure quote (multipart/form-data, supports file uploads) |
| GET    | `/api/brochure/`    | Get all brochure quotes                                                  |
| GET    | `/api/brochure/:id` | Get brochure quote by ID                                                 |
| DELETE | `/api/brochure/:id` | Delete a brochure quote                                                  |

### Options APIs

| Method | Endpoint                               |
| ------ | -------------------------------------- |
| GET    | `/api/brochure/options`                |
| POST   | `/api/brochure/fold-styles`            |
| POST   | `/api/brochure/sizes`                  |
| POST   | `/api/brochure/paper-stocks`           |
| POST   | `/api/brochure/finishing-types`        |
| PUT    | `/api/brochure/fold-styles/:index`     |
| PUT    | `/api/brochure/sizes/:index`           |
| PUT    | `/api/brochure/paper-stocks/:index`    |
| PUT    | `/api/brochure/finishing-types/:index` |
| DELETE | `/api/brochure/fold-styles/:index`     |
| DELETE | `/api/brochure/sizes/:index`           |
| DELETE | `/api/brochure/paper-stocks/:index`    |
| DELETE | `/api/brochure/finishing-types/:index` |

---

## 📄 PAMPHLET

### CRUD APIs

| Method | Endpoint            | Description                                                              |
| ------ | ------------------- | ------------------------------------------------------------------------ |
| POST   | `/api/pamphlet/`    | Create a new pamphlet quote (multipart/form-data, supports file uploads) |
| GET    | `/api/pamphlet/`    | Get all pamphlet quotes                                                  |
| GET    | `/api/pamphlet/:id` | Get pamphlet quote by ID                                                 |
| DELETE | `/api/pamphlet/:id` | Delete a pamphlet quote                                                  |

### Options APIs

| Method | Endpoint                                         |
| ------ | ------------------------------------------------ |
| GET    | `/api/pamphlet/options`                          |
| POST   | `/api/pamphlet/format-and-folding-styles`        |
| POST   | `/api/pamphlet/sizes`                            |
| POST   | `/api/pamphlet/paper-weights`                    |
| POST   | `/api/pamphlet/paper-types`                      |
| POST   | `/api/pamphlet/printed-sides`                    |
| POST   | `/api/pamphlet/laminations`                      |
| PUT    | `/api/pamphlet/format-and-folding-styles/:index` |
| PUT    | `/api/pamphlet/sizes/:index`                     |
| PUT    | `/api/pamphlet/paper-weights/:index`             |
| PUT    | `/api/pamphlet/paper-types/:index`               |
| PUT    | `/api/pamphlet/printed-sides/:index`             |
| PUT    | `/api/pamphlet/laminations/:index`               |
| DELETE | `/api/pamphlet/format-and-folding-styles/:index` |
| DELETE | `/api/pamphlet/sizes/:index`                     |
| DELETE | `/api/pamphlet/paper-weights/:index`             |
| DELETE | `/api/pamphlet/paper-types/:index`               |
| DELETE | `/api/pamphlet/printed-sides/:index`             |
| DELETE | `/api/pamphlet/laminations/:index`               |

---

## 🎨 ARTBOOK

### CRUD APIs

| Method | Endpoint           | Description                                                       |
| ------ | ------------------ | ----------------------------------------------------------------- |
| POST   | `/api/artbook/`    | Create a new artbook (multipart/form-data, supports file uploads) |
| GET    | `/api/artbook/`    | Get all artbooks                                                  |
| GET    | `/api/artbook/:id` | Get artbook by ID                                                 |
| DELETE | `/api/artbook/:id` | Delete an artbook                                                 |

### Options APIs

| Method | Endpoint                              |
| ------ | ------------------------------------- |
| GET    | `/api/artbook/options`                |
| POST   | `/api/artbook/sizes`                  |
| POST   | `/api/artbook/binding-styles`         |
| POST   | `/api/artbook/number-of-pages`        |
| POST   | `/api/artbook/paper-types`            |
| POST   | `/api/artbook/paper-weights`          |
| POST   | `/api/artbook/cover-materials`        |
| POST   | `/api/artbook/features`               |
| PUT    | `/api/artbook/sizes/:index`           |
| PUT    | `/api/artbook/binding-styles/:index`  |
| PUT    | `/api/artbook/number-of-pages/:index` |
| PUT    | `/api/artbook/paper-types/:index`     |
| PUT    | `/api/artbook/paper-weights/:index`   |
| PUT    | `/api/artbook/cover-materials/:index` |
| PUT    | `/api/artbook/features/:index`        |
| DELETE | `/api/artbook/sizes/:index`           |
| DELETE | `/api/artbook/binding-styles/:index`  |
| DELETE | `/api/artbook/number-of-pages/:index` |
| DELETE | `/api/artbook/paper-types/:index`     |
| DELETE | `/api/artbook/paper-weights/:index`   |
| DELETE | `/api/artbook/cover-materials/:index` |
| DELETE | `/api/artbook/features/:index`        |

---

## 💼 BUSINESS CARD

### CRUD APIs

| Method | Endpoint                 | Description                                                             |
| ------ | ------------------------ | ----------------------------------------------------------------------- |
| POST   | `/api/business-card/`    | Create a new business card (multipart/form-data, supports file uploads) |
| GET    | `/api/business-card/`    | Get all business cards                                                  |
| GET    | `/api/business-card/:id` | Get business card by ID                                                 |
| DELETE | `/api/business-card/:id` | Delete a business card                                                  |

### Options APIs

| Method | Endpoint                                    |
| ------ | ------------------------------------------- |
| GET    | `/api/business-card/options`                |
| POST   | `/api/business-card/card-sizes`             |
| POST   | `/api/business-card/paper-stocks`           |
| POST   | `/api/business-card/paper-textures`         |
| POST   | `/api/business-card/printing-sides`         |
| POST   | `/api/business-card/special-effects`        |
| POST   | `/api/business-card/foil-colors`            |
| POST   | `/api/business-card/corner-styles`          |
| POST   | `/api/business-card/corner-colors`          |
| PUT    | `/api/business-card/card-sizes/:index`      |
| PUT    | `/api/business-card/paper-stocks/:index`    |
| PUT    | `/api/business-card/paper-textures/:index`  |
| PUT    | `/api/business-card/printing-sides/:index`  |
| PUT    | `/api/business-card/special-effects/:index` |
| PUT    | `/api/business-card/foil-colors/:index`     |
| PUT    | `/api/business-card/corner-styles/:index`   |
| PUT    | `/api/business-card/corner-colors/:index`   |
| DELETE | `/api/business-card/card-sizes/:index`      |
| DELETE | `/api/business-card/paper-stocks/:index`    |
| DELETE | `/api/business-card/paper-textures/:index`  |
| DELETE | `/api/business-card/printing-sides/:index`  |
| DELETE | `/api/business-card/special-effects/:index` |
| DELETE | `/api/business-card/foil-colors/:index`     |
| DELETE | `/api/business-card/corner-styles/:index`   |
| DELETE | `/api/business-card/corner-colors/:index`   |

---

## ✉️ CUSTOM ENVELOPE

### CRUD APIs

| Method | Endpoint                   | Description                                                               |
| ------ | -------------------------- | ------------------------------------------------------------------------- |
| POST   | `/api/custom-envelope/`    | Create a new custom envelope (multipart/form-data, supports file uploads) |
| GET    | `/api/custom-envelope/`    | Get all custom envelopes                                                  |
| GET    | `/api/custom-envelope/:id` | Get custom envelope by ID                                                 |
| DELETE | `/api/custom-envelope/:id` | Delete a custom envelope                                                  |

### Options APIs

| Method | Endpoint                                      |
| ------ | --------------------------------------------- |
| GET    | `/api/custom-envelope/options`                |
| POST   | `/api/custom-envelope/sizes`                  |
| POST   | `/api/custom-envelope/paper-materials`        |
| POST   | `/api/custom-envelope/gsm-weights`            |
| POST   | `/api/custom-envelope/seal-types`             |
| POST   | `/api/custom-envelope/window-options`         |
| POST   | `/api/custom-envelope/print-colors`           |
| PUT    | `/api/custom-envelope/sizes/:index`           |
| PUT    | `/api/custom-envelope/paper-materials/:index` |
| PUT    | `/api/custom-envelope/gsm-weights/:index`     |
| PUT    | `/api/custom-envelope/seal-types/:index`      |
| PUT    | `/api/custom-envelope/window-options/:index`  |
| PUT    | `/api/custom-envelope/print-colors/:index`    |
| DELETE | `/api/custom-envelope/sizes/:index`           |
| DELETE | `/api/custom-envelope/paper-materials/:index` |
| DELETE | `/api/custom-envelope/gsm-weights/:index`     |
| DELETE | `/api/custom-envelope/seal-types/:index`      |
| DELETE | `/api/custom-envelope/window-options/:index`  |
| DELETE | `/api/custom-envelope/print-colors/:index`    |

---

## 🃏 CUSTOM CARD

### CRUD APIs

| Method | Endpoint               | Description                                                           |
| ------ | ---------------------- | --------------------------------------------------------------------- |
| POST   | `/api/custom-card/`    | Create a new custom card (multipart/form-data, supports file uploads) |
| GET    | `/api/custom-card/`    | Get all custom cards                                                  |
| GET    | `/api/custom-card/:id` | Get custom card by ID                                                 |
| DELETE | `/api/custom-card/:id` | Delete a custom card                                                  |

### Options APIs

| Method | Endpoint                                |
| ------ | --------------------------------------- |
| GET    | `/api/custom-card/options`              |
| POST   | `/api/custom-card/card-types`           |
| POST   | `/api/custom-card/sizes`                |
| POST   | `/api/custom-card/paper-stocks`         |
| POST   | `/api/custom-card/printed-sides`        |
| POST   | `/api/custom-card/laminations`          |
| POST   | `/api/custom-card/corners`              |
| POST   | `/api/custom-card/envelopes`            |
| PUT    | `/api/custom-card/card-types/:index`    |
| PUT    | `/api/custom-card/sizes/:index`         |
| PUT    | `/api/custom-card/paper-stocks/:index`  |
| PUT    | `/api/custom-card/printed-sides/:index` |
| PUT    | `/api/custom-card/laminations/:index`   |
| PUT    | `/api/custom-card/corners/:index`       |
| PUT    | `/api/custom-card/envelopes/:index`     |
| DELETE | `/api/custom-card/card-types/:index`    |
| DELETE | `/api/custom-card/sizes/:index`         |
| DELETE | `/api/custom-card/paper-stocks/:index`  |
| DELETE | `/api/custom-card/printed-sides/:index` |
| DELETE | `/api/custom-card/laminations/:index`   |
| DELETE | `/api/custom-card/corners/:index`       |
| DELETE | `/api/custom-card/envelopes/:index`     |

---

## 📖 MAGAZINE

### CRUD APIs

| Method | Endpoint             | Description                                                              |
| ------ | -------------------- | ------------------------------------------------------------------------ |
| POST   | `/api/magazines/`    | Create a new magazine quote (multipart/form-data, supports file uploads) |
| GET    | `/api/magazines/`    | Get all magazine quotes                                                  |
| GET    | `/api/magazines/:id` | Get magazine quote by ID                                                 |
| DELETE | `/api/magazines/:id` | Delete a magazine quote                                                  |

---

## 📖 MAGAZINE OPTIONS

### Options APIs

| Method | Endpoint                                         |
| ------ | ------------------------------------------------ |
| GET    | `/api/magazine-options/`                         |
| POST   | `/api/magazine-options/sizes`                    |
| POST   | `/api/magazine-options/binding-types`            |
| POST   | `/api/magazine-options/cover-styles`             |
| POST   | `/api/magazine-options/print-colors`             |
| POST   | `/api/magazine-options/paper-weights`            |
| POST   | `/api/magazine-options/paper-types`              |
| POST   | `/api/magazine-options/cover-finishes`           |
| POST   | `/api/magazine-options/page-edges`               |
| POST   | `/api/magazine-options/packaging`                |
| POST   | `/api/magazine-options/special-finishing`        |
| PUT    | `/api/magazine-options/sizes/:index`             |
| PUT    | `/api/magazine-options/binding-types/:index`     |
| PUT    | `/api/magazine-options/cover-styles/:index`      |
| PUT    | `/api/magazine-options/print-colors/:index`      |
| PUT    | `/api/magazine-options/paper-weights/:index`     |
| PUT    | `/api/magazine-options/paper-types/:index`       |
| PUT    | `/api/magazine-options/cover-finishes/:index`    |
| PUT    | `/api/magazine-options/page-edges/:index`        |
| PUT    | `/api/magazine-options/packaging/:index`         |
| PUT    | `/api/magazine-options/special-finishing/:index` |
| DELETE | `/api/magazine-options/sizes/:index`             |
| DELETE | `/api/magazine-options/binding-types/:index`     |
| DELETE | `/api/magazine-options/cover-styles/:index`      |
| DELETE | `/api/magazine-options/print-colors/:index`      |
| DELETE | `/api/magazine-options/paper-weights/:index`     |
| DELETE | `/api/magazine-options/paper-types/:index`       |
| DELETE | `/api/magazine-options/cover-finishes/:index`    |
| DELETE | `/api/magazine-options/page-edges/:index`        |
| DELETE | `/api/magazine-options/packaging/:index`         |
| DELETE | `/api/magazine-options/special-finishing/:index` |

---

## 📝 Request Body Formats

### For POST/ PUT (Options - JSON):

```json
{
  "value": "your-value"
}
```

### For POST (CRUD with files - multipart/form-data):

- `files`: (array of files, max 10)
- Other fields: (form fields for booklet/artbook/etc. data)

### Pamphlet POST Body Example:

```json
{
  "formatAndFoldingStyle": "Tri-fold",
  "size": "A4",
  "paperStock": {
    "paperWeight": "150gsm",
    "paperType": "Glossy"
  },
  "printingAndFinishes": {
    "printedSides": "Both",
    "lamination": ["Matte"]
  },
  "quantity": 1000,
  "targetDeadline": "2024-12-31",
  "customerDetails": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "address": "123 Main St"
  },
  "timeline": {
    "expectedDate": "2024-12-31",
    "deliveryDate": "2025-01-15"
  }
}
```

---

## 📚 PRODUCT CATALOGUE

### CRUD APIs

| Method | Endpoint                     | Description                                                                       |
| ------ | ---------------------------- | --------------------------------------------------------------------------------- |
| POST   | `/api/product-catalogue/`    | Create a new product catalogue quote (multipart/form-data, supports file uploads) |
| GET    | `/api/product-catalogue/`    | Get all product catalogue quotes                                                  |
| GET    | `/api/product-catalogue/:id` | Get product catalogue quote by ID                                                 |
| DELETE | `/api/product-catalogue/:id` | Delete a product catalogue quote                                                  |

### Options APIs

| Method | Endpoint                                              |
| ------ | ----------------------------------------------------- |
| GET    | `/api/product-catalogue/options`                      |
| POST   | `/api/product-catalogue/finished-sizes-closed`        |
| POST   | `/api/product-catalogue/binding-methods`              |
| POST   | `/api/product-catalogue/cover-papers-heavy`           |
| POST   | `/api/product-catalogue/inner-pages-text`             |
| POST   | `/api/product-catalogue/print-colors`                 |
| POST   | `/api/product-catalogue/total-number-of-pages`        |
| POST   | `/api/product-catalogue/cover-finishes-extras`        |
| PUT    | `/api/product-catalogue/finished-sizes-closed/:index` |
| PUT    | `/api/product-catalogue/binding-methods/:index`       |
| PUT    | `/api/product-catalogue/cover-papers-heavy/:index`    |
| PUT    | `/api/product-catalogue/inner-pages-text/:index`      |
| PUT    | `/api/product-catalogue/print-colors/:index`          |
| PUT    | `/api/product-catalogue/total-number-of-pages/:index` |
| PUT    | `/api/product-catalogue/cover-finishes-extras/:index` |
| DELETE | `/api/product-catalogue/finished-sizes-closed/:index` |
| DELETE | `/api/product-catalogue/binding-methods/:index`       |
| DELETE | `/api/product-catalogue/cover-papers-heavy/:index`    |
| DELETE | `/api/product-catalogue/inner-pages-text/:index`      |
| DELETE | `/api/product-catalogue/print-colors/:index`          |
| DELETE | `/api/product-catalogue/total-number-of-pages/:index` |
| DELETE | `/api/product-catalogue/cover-finishes-extras/:index` |

### Product Catalogue POST Body Example:

```json
{
  "formatAndBindingStyle": {
    "finishedSizeClosed": "A4",
    "bindingMethod": "Saddle Stitch"
  },
  "paperStockSelection": {
    "coverPaperHeavy": "300gsm Art Card",
    "innerPagesText": "150gsm Glossy Text",
    "printColor": "Full Color (CMYK)"
  },
  "pageCountAndColor": {
    "totalNumberOfPages": "32"
  },
  "coverFinishesAndExtras": ["UV Spot", "Matte Lamination"],
  "quantity": 1000,
  "deadlineOrSpecialInstructions": "Rush order - needed by Christmas",
  "customerDetails": {
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+9876543210",
    "address": "456 Business Ave, City"
  },
  "timeline": {
    "expectedDate": "2024-12-20",
    "deliveryDate": "2024-12-25"
  }
}
```

### For DELETE (Options):

- No body required
