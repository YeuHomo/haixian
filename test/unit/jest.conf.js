const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/haixiang/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/haixiang/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/haixiang/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/brand.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
}
