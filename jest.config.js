module.exports = {
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/cypress/",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/app/theme/",
    "<rootDir>/src/app/store/",
    "<rootDir>/src/pageStyles/",
    "<rootDir>/src/pages/",
  ],

  testRegex: "((\\.|/)(test))\\.j?t?sx?$",
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  /* Includes a set of convenient cusom matchers like ".toBeInTheDocument()".
  See available matchers here https://github.com/testing-library/jest-dom#custom-matchers */
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json",
    },
  },
};
