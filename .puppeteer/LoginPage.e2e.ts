import assert from 'power-assert';
import e2eConst from './e2eConst';
import { Page } from 'puppeteer';

describe("トップページのアプリ切り替えボタンのテスト", () => {
    beforeEach(async () => {
        await page.goto(e2eConst.baseUrl);
    });
    test.each([
        ['BlockReminder切り替えボタン', "AppButtons-BlockerButton", e2eConst.blockReminderUrl],
        ['MuteReminder切り替えボタン', "AppButtons-MuterButton", e2eConst.muteReminderUrl],
    ])('%sのクライアントルーティングテスト', async (testname, id, expect) => {
        await Promise.all([
            page.waitForNavigation(),
            page.click(`[${e2eConst.attrForE2E}=${id}]`),
        ]);

        assert.strictEqual(page.url(), expect);
    });
});

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
        ['Twitterで紹介ボタン', 'SNSLinkButton-Twitter', e2eConst.twitterUrl],
        ['Lineで紹介ボタン', 'SNSLinkButton-Line', e2eConst.lineUrl],
        ['Facebookで紹介ボタン', 'SNSLinkButton-Facebook', e2eConst.facebookUrl],
    ])('%sのポップアップウィンドウテスト', async (testName, id, expectIncludedUrl) => {
        const newPagePromise = new Promise<Page>(resolve => browser.once('targetcreated', target => resolve(target.page())));
        await page.click(`[${e2eConst.attrForE2E}=${id}]`);
        const newPage = await newPagePromise;
        // page.waitFor(2000);
        const url = newPage.url();
        await newPage.screenshot({path: `${e2eConst.outputDir}/${id}.png`})
        await newPage.close();
        // page.waitFor(4000);
        console.log(url, expectIncludedUrl);
        // assertをcloseの前に挟んだ場合、タイムアウトによってcloseできず後のテストに影響が出る可能性がある
        assert(url.includes(expectIncludedUrl));
    })
});
