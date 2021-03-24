module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  rules: {
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/no-unsafe-assignment": "off",
    // "@typescript-eslint/no-unsafe-member-access": "off",
    // "@typescript-eslint/no-unsafe-call": "off",
    // "@typescript-eslint/no-explicit-any": "off",
    // "no-nested-ternary": "off",
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
      }
    }
  ]
};
