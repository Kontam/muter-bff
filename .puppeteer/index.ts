// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5000');
    await page.screenshot({path: '.puppeteer/output/example.png'});
    console.log("done");
    // await Promise.all([
    //     page.waitForNavigation(),
    //     page.click('[data-e2e-id=LoginButton]')
    // ]);
    // await console.log(page.url());
    await LoginButtonTest(page);
    await browser.close();
})()

async function LoginButtonTest(page :puppeteer.Page) {
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-e2e-id=LoginButton]')
    ]);
    console.log(page.url());
}