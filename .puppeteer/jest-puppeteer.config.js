module.exports = {
    launch: {
      headless: process.env.HEADLESS !== 'false',
    },
     server: {
       command: 'npm run start:fe',
       port: 5000,
       launchTimeout: 50000,
     }
  };
