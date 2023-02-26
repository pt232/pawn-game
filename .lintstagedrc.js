const path = require("path");

function buildEslintCommand(filenames) {
  return `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;
}

module.exports = {
  "*.{js,ts,tsx}": ["npm run format", buildEslintCommand],
  "*.{json,md}": "npm run format",
};
