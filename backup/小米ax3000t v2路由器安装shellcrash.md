固件版本 1.0.84

## 一、解锁，连接路由器ssh

```
curl -X POST http://192.168.31.1/cgi-bin/luci/;stok=token/api/xqsystem/start_binding -d "uid=1234&key=1234'%0Anvram%20set%20ssh_en%3D1'"
curl -X POST http://192.168.31.1/cgi-bin/luci/;stok=token/api/xqsystem/start_binding -d "uid=1234&key=1234'%0Anvram%20commit'"
curl -X POST http://192.168.31.1/cgi-bin/luci/;stok=token/api/xqsystem/start_binding -d "uid=1234&key=1234'%0Ased%20-i%20's%2Fchannel%3D.*%2Fchannel%3D%22debug%22%2Fg'%20%2Fetc%2Finit.d%2Fdropbear'"
curl -X POST http://192.168.31.1/cgi-bin/luci/;stok=token/api/xqsystem/start_binding -d "uid=1234&key=1234'%0A%2Fetc%2Finit.d%2Fdropbear%20start'"
```
> [!CAUTION]
> ip换为实际路由器LAN的ip
> `token`换为路由器管理界面链接里`stok=`后的值

用mobaxterm连接路由器
账户：root
> [初始密码计算](https://miwifi.dev/ssh/)

## 二、安装shellcrash

### 1.
一键安装脚本：
```
export url='https://fastly.jsdelivr.net/gh/juewuy/ShellCrash@master' && sh -c "$(curl -kfsSl $url/install.sh)" && source /etc/profile &> /dev/null
```

> 1.公测版
> 1./data

### 2.

安装完成
输入`crash`开始第一次配置
> 导入配置步骤先跳过，后续换订阅链接服务器后再导入

配置完成后选择6导入配置文件

> [!TIP]
> 国内安装源选 cloudflare_CDN
> 订阅链接生成服务器选1.https://sub.jwsc.eu.org



## 可选

1.用白名单模式指定代理的设备
2.添加自定义节点，规则，策略组
3.安装web管理面板

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/api/cfile/AgACAgUAAxkDAAMCZyjBwK4pOQSclBKl2ioVEP8INnkAAqq-MRsZrElVLjkYvdYkmVwBAAMCAAN3AAM2BA" alt="img" width="100%">`

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/api/cfile/AgACAgUAAxkDAAMDZyjDrwokLtSqCpLgDl8PYfJqfPkAArK-MRsZrElVe91rqqHDSzQBAAMCAAN4AAM2BA" alt="img" width="100%">`
