# AppStoreConnect_WeChatWork
## 连接企业微信与 AppStoreConnect

通过这个项目可以对苹果的接口进行轮训，当审核状态更新的时候推送企业微信机器人

###  配置，真的笑，笑出声

你需要知道这个东西只能持续一个月，一个月后需要重新登入，正在研究其他的方法。

先确保机器已经安装 ruby fastlane node yarn

* 苹果限制必须在机器上先手动通过 2FA 登入  
```
fastlane spaceauth -u YOURAPPLEID  
```
* 其他的环境变量  
```
export itc_username="YOURAPPLEID"
export itc_team_id=YOURAPPLETEAMID
export bundle_id="YOURAPPLEBUNDLEID"
```
* Yarn Install
```
yarn i
```
* 刷新间隔时间，进入 poll-poll-itc.js 修改 pollIntervalSecond 的值即可。
* 企业微信机器人 url，进入 post-update.js 搜索 wechatboturl url 替换。
  
 
### 启动，让开发者开心的礼物，开了又开
```
node poll-itc.js
```

### 备注
#### get-app-status.rb
通过 Fastlane Spaceship 组建实现接口请求。

#### poll-itc.js
轮询，储存。

#### post-update.js
发送机器人推送请求。

本项目参考、副用了很多原作代码：https://github.com/erikvillegas/itunes-connect-slack  
使用的原作代码在 LICENCE 中有表明代码文件名与使用的许可证。不过原项目推送到 Slack 没法满足需求，所以开了坑。在本项目中我会继续尝试其他可以实现苹果 2FA 的方法。