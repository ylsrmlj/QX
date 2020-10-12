hostname =

#JD_DailyBonus
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
#京东读书
^https:\/\/jdread-api\.jd\.com\/* url script-request-header https://raw.githubusercontent.com/XidNDD/2020scripts/master/jddsSign.js
#lkyl
https:\/\/draw\.jdfcloud\.com\/\/api\/bean\/square\/silverBean\/task\/get\? url script-request-header https://raw.githubusercontent.com/Sunert/Scripts/master/Task/lkyl.js




#TieBa
https?:\/\/c\.tieba\.baidu\.com\/c\/s\/login url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js
#tieba
^https?:\/\/tieba\.baidu\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.cookie.js

#iQIYI
^https?:\/\/iface(\d)?\.iqiyi\.com\/ url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js
#10000
^https:\/\/wapside.189.cn:9001\/api\/home\/sign url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/10000/10000.cookie.js
#jddj
^https:\/\/daojia.jd.com/client(.*?)functionId=signin(.*?)userSigninNew url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/jddj/jddj.cookie.js
#neteasemusic
^https:\/\/music.163.com\/weapi\/user\/level url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/neteasemusic/neteasemu
#noteyoudao
^https:\/\/note.youdao.com\/yws\/mapi\/user\?method=checkin url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/noteyoudao/noteyoudao.cookie.js
#爱尚打卡
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/asdkziye.js
#陀螺打卡
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/tldkziye.js
#音乐打卡
https:\/\/www\.baimaa\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/yydkziye.js
#早起打卡
https:\/\/ph0001\.hezyq\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/master/zqdkziye.js
#微信打卡
https:\/\/(www\.baimaa\.com|www\.2xtj7\.cn|www\.hnmiaosu\.cc)\/app\/index\.php? url script-request-header https://raw.githubusercontent.com/wangdelu2020/hongliyu/master/wxdaka.js
#youth
https:\/\/\w+\.youth\.cn\/TaskCenter\/(sign|getSign) url script-request-header https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https?:\/\/ios\.baertt\.com\/v5\/article\/complete url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https:\/\/ios\.baertt\.com\/v5\/article\/red_packet url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
https:\/\/ios\.baertt\.com\/v5\/user\/app_stay\.json url script-request-body https://raw.githubusercontent.com/Sunert/Scripts/master/Task/youth.js
#txnews
https:\/\/api\.inews\.qq\.com\/event\/v1\/user\/event\/report\? url script-request-header https://raw.githubusercontent.com/Sunert/Scripts/master/Task/txnews2.js

#sfexpress
^https:\/\/sf-integral-sign-in.weixinjia.net\/app\/index url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js
^https:\/\/mcs-mimp-web.sf-express.com\/mcs-mimp\/share\/(.*?)Redirect url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js

#wps
^https:\/\/zt.wps.cn\/2018\/docer_check_in\/api\/act_list url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/wps/wps.cookie.js



#qqVipCheckIn
https:\/\/proxy.vac.qq.com\/cgi-bin\/srfentry.fcgi? url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/QQVip/qqVipCheckIn.js
#QQ萌宠获取cookie
https:\/\/qqpet.jwetech.com\/api\/authorizations url script-response-body https://raw.githubusercontent.com/lowking/Scripts/master/QQPet/lkQQPet.js




