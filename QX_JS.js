hostname = mp.weixin.qq.com, api.bilibili.com, app.bilibili.com, api.gamer.com.tw, trade-acs.m.taobao.com, api.m.jd.com, ios.prod.ftl.netflix.com

# 去微信公众号广告 (By Choler)
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

# 哔哩哔哩动画去广告 (By onewayticket255)
https://app.bilibili.com/x/v2/(splash|search/(defaultword|square)) url reject-200
https://api.bilibili.com/x/v2/dm/ad url reject-200
#https://app.bilibili.com/x/v2/space?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20space.js
https://app.bilibili.com/x/resource/show/tab?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
https://app.bilibili.com/x/v2/feed/index?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
https://app.bilibili.com/x/v2/account/mine?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
https://app.bilibili.com/x/v2/view?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
https://api.bilibili.com/x/v2/reply/main?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20reply.js
https://api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20live.js

# 哔哩哔哩番剧开启1080P+
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js

# 动画疯 去广告
https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js
https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js

# 京东比价
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

# 淘宝比价
^http://.+/amdc/mobileDispatch url script-request-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js

# Netflix评分
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
