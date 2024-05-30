module.exports = {
  "extends": ["next/core-web-vitals", "eslint:recommended",
    "plugin:@typescript-eslint/recommended", "prettier"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "no-unused-vars": "warn",
    "no-undef": "warn",
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
  }
}