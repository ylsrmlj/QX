hostname = operation-api.jimistore.com, api.m.jd.com, jdread-api.jd.com, draw.jdfcloud.com, c.tieba.baidu.com, tieba.baidu.com, ifac*.iqiyi.com, music.163.com, *.you.163.com, sf-integral-sign-in.weixinjia.net, mcs-mimp-web.sf-express.com, 110.43.90.61, zt.wps.cn, proxy.vac.qq.com, qqpet.jwetech.com, *.youth.cn, ios.baertt.com, api.inews.qq.com, www.2xtj7.cn, www.baimaa.com, www.hnmiaosu.cc, ph0001.hezyq.com, wq.02gk.com,dk.ne72.com



##############################################  京东系列

#JD_DailyBonus（api.m.jd.com
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

#京东读书(jdread-api.jd.com
^https:\/\/jdread-api\.jd\.com\/* url script-request-header https://raw.githubusercontent.com/XidNDD/2020scripts/master/jddsSign.js

#来客有礼(draw.jdfcloud.com
https:\/\/draw\.jdfcloud\.com\/\/api\/bean\/square\/silverBean\/task\/get\? url script-request-header https://raw.githubusercontent.com/Sunert/Scripts/master/Task/lkyl.js

#京东到家
^https:\/\/daojia.jd.com/client(.*?)functionId=signin(.*?)userSigninNew url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/jddj/jddj.cookie.js


####################################################  其它签到

#TieBa(c.tieba.baidu.com
https?:\/\/c\.tieba\.baidu\.com\/c\/s\/login url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js
#百度贴吧（网页）(tieba.baidu.com
^https?:\/\/tieba\.baidu\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.cookie.js

#爱奇艺(ifac*.iqiyi.com
^https?:\/\/iface(\d)?\.iqiyi\.com\/ url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js

#中国电信
^https:\/\/wapside.189.cn:9001\/api\/home\/sign url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/10000/10000.cookie.js

#网易云音乐(music.163.com
^https:\/\/music.163.com\/weapi\/user\/level url script-request-body https://github.com/chavyleung/scripts/raw/master/neteasemusic/quanx/neteasemusic.cookie.js

#有道云笔记(*.you.163.com,
^https:\/\/note.youdao.com\/yws\/mapi\/user\?method=checkin url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/noteyoudao/noteyoudao.cookie.js

#顺丰快递(sf-integral-sign-in.weixinjia.net, mcs-mimp-web.sf-express.com
^https:\/\/sf-integral-sign-in.weixinjia.net\/app\/index url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js
^https:\/\/mcs-mimp-web.sf-express.com\/mcs-mimp\/share\/(.*?)Redirect url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js

#wps(110.43.90.61, zt.wps.cn
^https:\/\/zt.wps.cn\/2018\/docer_check_in\/api\/act_list url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/wps/wps.cookie.js

#QQ会员(proxy.vac.qq.com
https:\/\/proxy.vac.qq.com\/cgi-bin\/srfentry.fcgi? url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/QQVip/qqVipCheckIn.js

#QQ萌宠获取cookie(qqpet.jwetech.com
https:\/\/qqpet.jwetech.com\/api\/authorizations url script-response-body https://raw.githubusercontent.com/lowking/Scripts/master/QQPet/lkQQPet.js


################################################    薅羊毛
#爱尚打卡(ph0001.hezyq.com
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/asdkziye.js

#陀螺打卡(wq.02gk.com
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/tldkziye.js

#音乐打卡(www.baimaa.com
https:\/\/www\.baimaa\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/yydkziye.js

#早起打卡(ph0001.hezyq.com
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/zqdkziye.js

#微信打卡(www.2xtj7.cn,www.baimaa.com,www.hnmiaosu.cc,ph0001.hezyq.com,wq.02gk.com,dk.ne72.com
https:\/\/(www\.baimaa\.com|www\.2xtj7\.cn|www\.hnmiaosu\.cc)\/app\/index\.php? url script-request-header https://raw.githubusercontent.com/wangdelu2020/hongliyu/master/wxdaka.js

#中青看点(*.youth.cn, ios.baertt.com
https:\/\/\w+\.youth\.cn\/TaskCenter\/(sign|getSign) url script-request-header https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https?:\/\/ios\.baertt\.com\/v5\/article\/complete url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https:\/\/ios\.baertt\.com\/v5\/article\/red_packet url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https:\/\/ios\.baertt\.com\/v5\/user\/app_stay\.json url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js

#腾讯新闻(api.inews.qq.com
https:\/\/api\.inews\.qq\.com\/event\/v1\/user\/event\/report\? url script-request-header https://github.com/ylsrmlj/Loon-Scripts/raw/master/.github/ISSUE_TEMPLATE/txnews2.js

#支付宝挖矿 operation-api.jimistore.com
^https:\/\/operation-api\.jimistore\.com\/* url script-request-body https://github.com/ylsrmlj/Loon-Scripts/raw/master/.github/ISSUE_TEMPLATE/ttwbxcxSign.js







