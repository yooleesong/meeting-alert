const fetch = require('node-fetch');
const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

function webhook(){
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    var week = ['일', '월', '화', '수', '목', '금', '토'];
    var payload = {
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": ":star: 곧 아침 회의가 시작됩니다. :star:"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*오른쪽 버튼*을 눌러 회의에 참석해 주세요~! :hugging_face:\n@org-mgt"
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "행아웃 바로가기 >",
                        "emoji": true
                    },
                    "value": "click_me_123",
                    "url": "https://meet.google.com/dmx-vjic-xjx",
                    "action_id": "button-action"
                }
            },
            {
                "type": "divider"
            }
        ]
    }
    payload = JSON.stringify(payload);
    fetch(SLACK_WEBHOOK_URL,{method:'POST', body: payload}).then(function(response){
        return response.json();
    })
}


async function postWebhook(){
    try {
        webhook();
    }catch (error){
        console.log(error);
        process.exit(1);
    }
}

postWebhook();
