#新版YouTube去广告
[rewrite_local]
ctier=[A-Z] url 302 ctier=A
^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) url reject-200

hostname = *.googlevideo.com
