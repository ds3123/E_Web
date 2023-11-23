
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir : './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  
    setupFilesAfterEnv : [ "<rootDir>/setupTest.ts" ] ,
  
    testEnvironment: 'jest-environment-jsdom',
  
    moduleNameMapper: {

      '\\.(css|less|scss|png)$': 'identity-obj-proxy',
  
      // 配置 Next.js 特定模組路徑 ( 作用？2023.11.23 )
      // "@layout/(.*)"     : "<rootDir>/src/components/layout/$1",
      
    },
  
    // for 套件 jest-watch-typeahead
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  
  }


// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig( customJestConfig ) 
