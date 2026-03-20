# Template Authoring Guide

## Creating a New Template

1. Choose the correct category folder under `templates/`
2. Name the file: `descriptive-name-vl.json` (Vega-Lite) or `descriptive-name-vega.json` (Vega)
3. Use the skeleton below as a starting point

## Vega-Lite Template Skeleton

```json
{
  "$schema": "https://deneb-viz.github.io/schema/deneb-template-usermeta-v1.json",
  "usermeta": {
    "deneb": {
      "build": "1.6.0",
      "metaVersion": 1,
      "provider": "Vega-Lite",
      "providerVersion": "5.6.0"
    },
    "information": {
      "name": "My Template Name",
      "description": "What this visual does and when to use it",
      "author": "Your Name",
      "uuid": "generate-a-uuid-here",
      "generated": "2024-01-01T00:00:00.000Z"
    },
    "dataset": [
      {
        "key": "__0__",
        "name": "Field Name",
        "description": "What this field represents",
        "type": "text",
        "kind": "column"
      },
      {
        "key": "__1__",
        "name": "Measure Name",
        "description": "What this measure represents",
        "type": "numeric",
        "kind": "measure"
      }
    ]
  },
  "config": {},
  "data": { "name": "dataset" },
  "mark": { "type": "bar" },
  "encoding": {
    "x": { "field": "__0__", "type": "nominal" },
    "y": { "field": "__1__", "type": "quantitative" }
  }
}
```

## Dataset Field Types

| `type`      | Use for                          |
|-------------|----------------------------------|
| `text`      | Text/string columns              |
| `numeric`   | Numbers, integers, decimals      |
| `dateTime`  | Dates and timestamps             |
| `bool`      | Boolean (true/false) columns     |

## Dataset Field Kinds

| `kind`    | Use for                    |
|-----------|----------------------------|
| `column`  | Regular table columns      |
| `measure` | DAX measures               |

## Field Key Convention

Use `__0__`, `__1__`, `__2__`, etc. as placeholder keys. Deneb replaces these with the actual field names when the template is imported and fields are mapped.

## Generating a UUID

You can generate a UUID online at https://www.uuidgenerator.net/ or use:
```bash
node -e "const {randomUUID} = require('crypto'); console.log(randomUUID())"
```

## Validation

Run the validation script before committing:
```bash
node scripts/validate-templates.js
```

## Power BI Color Palette

Use these standard Power BI colors for consistency:
- Primary blue: `#118DFF`
- Dark blue: `#12239E`
- Orange: `#E66C37`
- Purple: `#6B007B`
- Pink: `#E044A7`
- Violet: `#744EC2`
- Yellow: `#D9B300`
- Red: `#D64550`
