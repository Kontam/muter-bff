import assert from 'power-assert';
import e2eConst from './e2eConst';
import { Page } from 'puppeteer';

describe("トップページのテスト", () => {
    beforeAll(async () => {
        await page.goto(e2eConst.baseUrl);
    });

    test("トップページ表示直後の情報が仕様通りになっていること", async () => {
        await page.screenshot({path: `${e2eConst.outputDir}/topPage.png`});
        await assert.strictEqual(await page.title(),'my title');
    });
});

describe("トップページからの別タブ画面遷移のテスト(１階層のみ）", () => {
    beforeAll(async () => {
        await page.goto(e2eConst.baseUrl);
    })

    test.each([
        ['製作者のホームページリンク', 'OwnerLink', e2eConst.ownerPageUrl],
        ['フッターのホームアイコンリンク', 'OwnerInfo-OwnerLink', e2eConst.ownerPageUrl], 
        ['フッターのツイッターアイコンリンク', 'OwnerInfo-TwitterLink', e2eConst.ownerTwitterUrl],
    ])("%sの画面遷移テスト", async (testName, id, expectedUrl) => {
        const newPagePromise = new Promise<Page>(resolve => browser.once('targetcreated', target => resolve(target.page())));
        await page.click(`[${e2eConst.attrForE2E}=${id}]`);
        const newPage = await newPagePromise;
        await newPage.screenshot({path: `${e2eConst.outputDir}/${id}.png`})
        await assert.strictEqual(await newPage.url(), expectedUrl);
        await newPage.close();
    });
})

describe("トップページから表示するポップアップウインドウ表示のテスト", () => {
    test.each([
        ['Lineで紹介ボタン', 'SNSLinkButton-Line', e2eConst.lineUrl],
        ['Facebookで紹介ボタン', 'SNSLinkButton-Facebook', e2eConst.facebookUrl],
        ['Twitterで紹介ボタン', 'SNSLinkButton-Twitter', e2eConst.twitterUrl],
    ])('%sのポップアップウィンドウテスト', async (testName, id, expectIncludedUrl) => {
        const newPagePromise = new Promise<Page>(resolve => browser.once('targetcreated', target => resolve(target.page())));
        await page.click(`[${e2eConst.attrForE2E}=${id}]`);
        const newPage = await newPagePromise;
        const url = newPage.url();
        await newPage.screenshot({path: `${e2eConst.outputDir}/${id}.png`})
        newPage.close();
        console.log(url, expectIncludedUrl);
        assert(url.includes(expectIncludedUrl));
    })
});