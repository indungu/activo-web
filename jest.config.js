module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  "globals": {
    "ts-jest": {
      "useBabelrc": true
    }
  },
  'transform': {
    '^.+\\.tsx?$': 'ts-jest'
  },
  'testRegex': '(roots/.*|(\\.|/)(test))\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/**/*.fixtures.ts',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  'collectCoverage': true,
  'collectCoverageFrom': ["src/**/*.tsx"],
  'coverageThreshold': {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    }
  },
  'coveragePathIgnorePatterns': ['/node_modules', '<rootDir>/src/index.tsx'],
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'setupTestFrameworkScriptFile': '<rootDir>/src/setupEnzyme.ts',
}
