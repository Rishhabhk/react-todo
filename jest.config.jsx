module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testMatch: ['**/tests/**/*.test.mjs'],
    extensionsToTreatAsEsm: ['.jsx'],
};

// Additional Jest configuration
module.exports.moduleNameMapper = {
    "\\.(css|less)$": "<rootDir>/styleMock.js"
};