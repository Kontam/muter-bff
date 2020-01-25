/*
* Jestで読み込まれるファイルを空オブジェクトに変換するモジュール
* svg画像をロードした際にエラーになるため作成
*/
module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey() {
    // The output is always the same.
    return 'svgTransform';
  },
};
