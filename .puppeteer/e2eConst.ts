const e2eConst = {
    outputDir: '.puppeteer/output/',
    baseUrl: 'http://localhost:5000',
    muteReminderUrl: 'http://localhost:5000/',
    blockReminderUrl: 'http://localhost:5000/BlockReminder',
    ownerPageUrl: 'https://konkonta.com/',
    ownerTwitterUrl: 'https://twitter.com/cha_han5656',
    twitterUrl: 'https://twitter.com/',
    lineUrl: 'line.me',
    facebookUrl: 'https://www.facebook.com/',
    attrForE2E: 'data-e2e-id',
} as const;

export default e2eConst;