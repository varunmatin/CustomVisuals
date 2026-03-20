#!/usr/bin/env node
/**
 * validate-templates.js
 * Validates all Deneb template JSON files in the templates/ directory.
 * Checks for required fields in the usermeta block and valid JSON structure.
 */

const fs = require("fs");
const path = require("path");

const TEMPLATES_DIR = path.join(__dirname, "..", "templates");
const REQUIRED_USERMETA_FIELDS = ["deneb", "information", "dataset"];
const REQUIRED_INFORMATION_FIELDS = ["name", "description", "uuid"];

let errors = 0;
let checked = 0;

function validateTemplate(filePath) {
  const relative = path.relative(process.cwd(), filePath);
  let raw;
  try {
    raw = fs.readFileSync(filePath, "utf8");
  } catch (e) {
    console.error(`[ERROR] Cannot read ${relative}: ${e.message}`);
    errors++;
    return;
  }

  let json;
  try {
    json = JSON.parse(raw);
  } catch (e) {
    console.error(`[ERROR] Invalid JSON in ${relative}: ${e.message}`);
    errors++;
    return;
  }

  const issues = [];

  if (!json.usermeta) {
    issues.push("Missing 'usermeta' block");
  } else {
    for (const field of REQUIRED_USERMETA_FIELDS) {
      if (!json.usermeta[field]) {
        issues.push(`Missing 'usermeta.${field}'`);
      }
    }
    if (json.usermeta.information) {
      for (const field of REQUIRED_INFORMATION_FIELDS) {
        if (!json.usermeta.information[field]) {
          issues.push(`Missing 'usermeta.information.${field}'`);
        }
      }
    }
  }

  if (!json.data) {
    issues.push("Missing 'data' block");
  }

  if (issues.length > 0) {
    console.error(`[FAIL] ${relative}`);
    issues.forEach((issue) => console.error(`       - ${issue}`));
    errors++;
  } else {
    console.log(`[OK]   ${relative}`);
  }

  checked++;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (entry.name.endsWith(".json")) {
      validateTemplate(full);
    }
  }
}

walkDir(TEMPLATES_DIR);

console.log(`\nValidated ${checked} template(s). Errors: ${errors}`);
process.exit(errors > 0 ? 1 : 0);
