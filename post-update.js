var moment = require('moment')
var axios = require('axios');

function sentWechatWorkBot(appInfo, submissionStartDate) {
	var message = ` ${appInfo.name} 的状态被更改为 ${appInfo.status}`
	var name = appInfo.name
	var version = appInfo.version
	var appId = appInfo.appId
	var wechatboturl = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=asdf'
	var msgtype = 'markdown'
	let markdown = {
        content: '<font color=\"warning\">'+message+'</font>\n'+
        ' >应用名: <font color=\"comment\">'+name+'</font>\n'+
        ' >应用版本: <font color=\"comment\">'+version+'</font>\n'+
        ' >AppID: <font color=\"comment\">'+appId+'</font>\n'
    }
    axios.post(wechatboturl, {msgtype,markdown})
}

module.exports = {
	sentWechatWorkBot
};