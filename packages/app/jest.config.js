export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    // Стандартный маппер для ESM импортов с расширением .js
    '^(\\.{1,2}/.*)\\.js$': '$1',
    // ГЛАВНОЕ ИСПРАВЛЕНИЕ: перенаправляем импорт библиотеки на её исходный TS-код
    '^@my-app/ui-library$': '<rootDir>/../ui-library/src/index.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
}