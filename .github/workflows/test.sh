#!/bin/bash

cd ../../
npm install
npx jest
if [ $? = 0 ]; then
  BOT_MESSAGE="<!here>\nGitHubのジョブは無事に成功したようです。\nお疲れ様でした。"
  STATUS=0
else
  BOT_MESSAGE="<!here>\nGitHubのジョブが失敗したようです。お手隙の際に確認してくださいね。\nhttps://github.com/Kanta0111/MuteRemider/actions"
  STATUS=1
fi

curl -X POST --data-urlencode "payload={\"channel\": \"#development\", \"text\": \"${BOT_MESSAGE}\"}" https://hooks.slack.com/services/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
exit $STATUS
