require('dotenv').config()

const path = require('path');
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')

module.exports = withImages(withSass({
    cssModules: true,
    // distDir: 'dist/bff/next',
    env: {
      // Reference a variable that was defined in the .env file and make it available at Build Time
      TEST_VAR: process.env.TEST_VAR,
      BASE_URL_DEV: process.env.BASE_URL_DEV,
      BASE_URL: process.env.BASE_URL,
      API_BASE_URL_DEV: process.env.API_BASE_URL_DEV,
      API_BASE_URL: process.env.API_BASE_URL,
      CALLBACK_SLUG: process.env.CALLBACK_SLUG,
      CONSUMER_KEY: process.env.CONSUMER_KEY,
      CONSUMER_SECRET: process.env.CONSUMER_SECRET,
      SESSION_SECRET: process.env.SESSION_SECRET,
      JWT_SECRET: process.env.JWT_SECRET
    },
    webpack: config => {
      config.plugins = config.plugins || []
      config.plugins = [
        ...config.plugins,
    ]

      config.node = {
        fs: 'empty'
      }

      return config
    }
  })
)
