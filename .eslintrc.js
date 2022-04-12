module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // react 17 以上版本 jsx 无需 import react
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // 允许组件匿名函数导出
    "react/display-name": [0, { ignoreTranspilerName: false }],
    // node 使用 require
    "@typescript-eslint/no-var-requires": "off",
  },
};
