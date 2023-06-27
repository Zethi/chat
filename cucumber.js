const common = [
  "--require-module ts-node/register" // Load TypeScript module
];

const backend = [
  ...common,
  "tests/apps/backend/features/**/*.feature",
  "--require tests/apps/backend/features/step_definitions/*.steps.ts"
].join(" ");

module.exports = {
  backend
};
