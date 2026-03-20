# Power BI Deneb Custom Visuals

A collection of JSON templates for [Deneb](https://deneb-viz.github.io/) custom visuals in Power BI. Deneb allows you to use the [Vega](https://vega.github.io/vega/) and [Vega-Lite](https://vega.github.io/vega-lite/) visualization grammars directly within Power BI reports.

## What is Deneb?

Deneb is a certified Power BI custom visual that lets you author your own visualizations using Vega or Vega-Lite JSON specifications. It provides full access to these powerful visualization grammars while integrating seamlessly with Power BI's data model, filtering, and theming.

## Repository Structure

```
CustomVisuals/
├── templates/              # Deneb JSON template files
│   ├── bar-charts/         # Bar and column chart variations
│   ├── line-charts/        # Line and area chart variations
│   ├── scatter-plots/      # Scatter and bubble chart variations
│   ├── tables/             # Table and matrix variations
│   ├── cards/              # KPI card and summary visual variations
│   └── combo-charts/       # Combination chart variations
├── src/                    # Shared Vega/Vega-Lite components and configs
├── scripts/                # Utility scripts for validation and building
└── docs/                   # Additional documentation
```

## Template Format

Each template is a `.json` file that can be imported directly into the Deneb visual in Power BI. Templates follow the Deneb template schema:

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
      "name": "Template Name",
      "description": "Description of the visual",
      "author": "Author Name",
      "uuid": "unique-uuid-here",
      "generated": "2024-01-01T00:00:00.000Z"
    },
    "dataset": []
  },
  "config": {},
  "data": { "name": "dataset" },
  "mark": {},
  "encoding": {}
}
```

## Getting Started

### Prerequisites

- Power BI Desktop or Power BI Service
- [Deneb](https://appsource.microsoft.com/en-us/product/power-bi-visuals/coacervolimited1596856650797.deneb) installed in your Power BI environment

### Using a Template

1. Open Power BI Desktop and add the Deneb visual to your report canvas
2. Select the Deneb visual and bind your data fields
3. In the Deneb editor, click **New Specification** > **Import from file**
4. Select the `.json` template file from this repository
5. Map the template's placeholder fields to your actual Power BI fields
6. Customize colors, labels, and other properties as needed

### Template Categories

| Category | Description |
|----------|-------------|
| `bar-charts/` | Horizontal/vertical bars, grouped, stacked, diverging |
| `line-charts/` | Single/multi series lines, area charts, sparklines |
| `scatter-plots/` | Scatter, bubble, dot plots |
| `tables/` | Formatted tables, heatmap tables, conditional formatting |
| `cards/` | KPI cards, summary tiles, metric displays |
| `combo-charts/` | Bar+line, dual axis, layered charts |

## Vega vs Vega-Lite

- **Vega-Lite**: Higher-level grammar, easier to write, covers most use cases
- **Vega**: Lower-level grammar, full control, more complex but more powerful

Templates in this repo indicate which grammar they use in their filename:
- `*-vl.json` — Vega-Lite
- `*-vega.json` — Vega

## Contributing

1. Create your template in the appropriate category folder
2. Follow the naming convention: `descriptive-name-[vl|vega].json`
3. Include a `usermeta` block with complete template information
4. Add a comment block describing required dataset fields

## Resources

- [Deneb Documentation](https://deneb-viz.github.io/)
- [Vega-Lite Documentation](https://vega.github.io/vega-lite/)
- [Vega Documentation](https://vega.github.io/vega/)
- [Deneb Showcase](https://deneb-viz.github.io/community/showcase)
- [Power BI Community — Deneb](https://community.powerbi.com/t5/Deneb/bd-p/Deneb)
