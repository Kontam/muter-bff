import assert from 'power-assert';
import e2eConst from '../e2eConst';
import { BoundingBox, Page } from 'puppeteer';
require('dotenv').config({ path: '.puppeteer/.env'});
/**
 * トップページからログインしてMuteReminderの画面のテストを行う
 */

describe('トップページからログインする', () => {
    let sideBarX = 0;
    let tweetListHeight = 0;
    test('ログインボタン押下でTwitterログイン画面に遷移', async () => {
        await page.setViewport({width: 1440, height: 900 });
        await page.goto(e2eConst.baseUrl);
        const nextPagePromise = page.waitForNavigation();
        await page.click(`[${e2eConst.attrForE2E}=LoginButton]`);
        await nextPagePromise;
        await page.screenshot({path: `${e2eConst.outputDir}/TwitterLogin.png`});

        assert.ok(page.url().includes(e2eConst.loginPageUrl));
    });

    test('ログイン情報を入力してボタンを押下するとMuteReminderに進む', async () => {
        const twId = process.env.TWITTER_ID || "";
        const twPw = process.env.TWITTER_PW || "";
        await page.type("#username_or_email", twId);
        await page.type("#password", twPw );
        const nextPagePromise = page.waitForSelector(`[${e2eConst.attrForE2E}=ShowTweetsButton_initial]`);
        await page.click('input[value="連携アプリを認証"]');
        await nextPagePromise;

        assert.ok(!page.url().includes(e2eConst.loginPageUrl));
    });

    test('ツイートをチラ見ボタンを押下するとチラ見ボタンの状態が変化する', async () => {
        await page.click(`[${e2eConst.attrForE2E}=ShowTweetsButton_initial]`);
        await page.waitFor(1000); //アニメーションの終了を待つ
        const element = await page.$(`[${e2eConst.attrForE2E}=ShowTweetsButton_opened]`);
        assert(element);
    })

    test('チラ見ボタンが押下されるとツイートが表示される', async () => {
        const tweetListElem = await page.$(`[${e2eConst.attrForE2E}=TweetList_initial]`);
        const box = tweetListElem ? await tweetListElem.boundingBox() : null;
        if (!box) throw("error on TweetList");
        tweetListHeight = box.height;
        const tweetListOpendElem = await page.$(`[${e2eConst.attrForE2E}=TweetList_opened]`);
        const openedBox = tweetListOpendElem ? await tweetListOpendElem.boundingBox() : {} as BoundingBox;
        if (!openedBox) throw("error on opend TweetList");
        assert(openedBox.height > tweetListHeight); // 開いたときは大きい
    })

    test('Twitterで見るボタンが押下されると別タブでTwitterが開く', async () => {
        const newPagePromise = new Promise<Page>(resolve => browser.once('targetcreated', target => resolve(target.page())));
        await page.click(`[${e2eConst.attrForE2E}=TwitterLink]`);
        const newPage = await newPagePromise;
        assert(newPage.url().includes(e2eConst.twitterUrl));
        await newPage.close();
    })

    test('closeボタン押下でサイドバーが閉じる', async () => {
        const sideBarElem = await page.$(`[${e2eConst.attrForE2E}=MuterMenu_opened]`);
        if (!sideBarElem) throw("MuterMenu not found");
        const boundingBox = await sideBarElem.boundingBox() || {x: 1} as BoundingBox;
        sideBarX = boundingBox.x; 
        await page.click(`[${e2eConst.attrForE2E}=ToggleMuterMenuButton_opened]`)
        await page.waitFor(1000); // アニメーションの時間を待つ

        const closedSideBarElem = await page.$(`[${e2eConst.attrForE2E}=MuterMenu_closed]`);
        if (!closedSideBarElem) throw("MuterMenu not found");
        const closedBoundingBox = await closedSideBarElem.boundingBox() || {x: 1} as BoundingBox;
        assert(sideBarX > closedBoundingBox.x); // 閉じたサイドバーは小さい
        // ボタンが閉じるに変わっている
        const openButtonElem = page.$(`[${e2eConst.attrForE2E}=ToggleMuterMenuButton_closed]`)
        assert(openButtonElem);
    })

    test('トグルミュートボタンのテスト ミュートボタンを押すとミュートになる', async () => {
        const listedUserElem = await page.$(`[${e2eConst.attrForE2E}=ListedUser]`);
        if (!listedUserElem) throw('userList not found');
        const selecterPromise = page.waitForSelector(`[${e2eConst.attrForE2E}=UnmuteButton_unmuted]`);
        const unmuteButtonElem = await page.$(`[${e2eConst.attrForE2E}=UnmuteButton_muted]`);
        if (!unmuteButtonElem) throw('unmuteButton not found');
        await unmuteButtonElem.click();
        await selecterPromise;
        assert(await page.$(`[${e2eConst.attrForE2E}=UnmuteButton_unmuted]`)); // トグルしたとあとはミュートにするボタンが取れる
    })

    test('トグルミュートボタンのテスト ミュートボタンを押すと元に戻る', async () => {
        const responsePromise = page.waitForResponse(response => true);
        await page.click(`[${e2eConst.attrForE2E}=UnmuteButton_unmuted]`);
        await responsePromise;
        await page.waitFor(2000); // レスポンスが帰った直後にボタンが変わらない
        await page.screenshot({path: `${e2eConst.outputDir}/muteButton.png`})
        assert(!await page.$(`[${e2eConst.attrForE2E}=UnmuteButton_unmuted]`)); // ミュートするボタンは存在しなくなる
    })
})