[n2n](https://github.com/ntop/n2n)是一个内网穿透服务，它可以让我和在不同地方的朋友组建虚拟局域网，从而达成游戏联机、文件传输等目的。

> n2n由`核心节点(supernode)`和`边缘节点(edgenode)`构成，核心节点运行在服务器端，作为中转服务器以及帮助边缘节点客户端打洞p2p直连！

## 一、安装

> 环境：Ubuntu 22.04 server 64bit云服务器，root账户

> [!IMPORTANT]
> 服务器需带有公网ip！！！

### 1. 进入opt目录
```
cd /opt
```

### 2. 下载n2n安装包
```
wget https://github.com/ntop/n2n/releases/download/3.0/n2n_3.0.0-1038_amd64.deb
```

### 3. 安装n2n
```
apt install ./n2n_3.0.0-1038_amd64.deb
```
> 非root用户这类命令需要sudo权限

## 二、运行

### 1. 创建一个新screen
```
screen -S n2n
```
> 系统未安装screen可用`apt-get install screen`安装

### 2. 运行supernode
```
supernode -p xxxx -M -f 
```

  > [!NOTE]
> -p后的数字代表supernode监听端口号，可自由设置，需要在服务器防火墙或安全组放行对应端口的udp协议

> -f前台运行，-M避免短时间内多次连接MAC地址未释放的问题

出现`supernode started`代表成功运行:

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/c10ecf4a22b4bc0e6de32.png" alt="img" width="100%">`

### 3. 自定义配置（可选）
**supernode附加参数:**
```
-p 端口 | Supernode监听端口，默认 7654
-F federation名称 | supernode federation名称，默认为 *Federation
-l 主机:端口 | 和 -F 配合，已知的一台Supernode地址和端口
-M | 关闭非用户名密码认证的群组的MAC和IP地址欺骗保护功能
-V 文本 | 自定义字符串（最长19位），用于在管理输出日志中展示
-c 组名称配置文件路径 | 该配置文件中包含允许使用的组名称
-a IP段 | 用于自动分配IP，格式如 -a 192.168.0.0-192.168.255.0/24
-t 端口 | 用于管理supernode
--management_password 文本 | 管理端的密码
-v | 输出更多日志
```

- #### 自动分配虚拟ip
例：
```
supernode -p xxxx -M -f -a 192.168.10.0-192.168.10.0/24
```
> 自动分配192.168.10.0~192.168.10.255的虚拟ip

- #### 添加组名称白名单（不在白名单的组名称阻止连接）
需要创建一个`community.list`文件，并且包含一行一个的白名单组名称

例：

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/c10bac24329f596b716cb.png" alt="img" width="100%">`

```
supernode -p xxxx -M -f -c /etc/n2n/community.list
```

> 只有组名称为liyifanbaba，客户端才可以连接

### 综上，最后的启动命令行可以是这样：
```
supernode -p xxxx -M -f -a 192.168.10.0-192.168.10.0/24 -c /etc/n2n/community.list
```

## 三、结束

在确保程序正常运行后，按`ctrl+A+D`热键，把n2n的screen放入后台运行，然后可以关闭远程连接，大功告成

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/d1a93a736cdf7364723fd.jpg" alt="img" width="100%">`


## [#以下是n2n windows客户端的简单使用方法](https://bugxia.com/525.html)

**虽然n2n官方不提供 Windows 编译版本，没有官方图形界面，但我们有自己的大佬！**

### 1.下载客户端压缩包并解压
[EasyN2N](https://bugxia.com/357.html)

> [!IMPORTANT]
> 杀毒软件可能会误报，需添加白名单

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/3168ef76584b58778f46b.png" alt="img" width="100%">`

### 2. 双击n2n.exe打开（确保n2n以管理员权限运行）
初次运行时，启动器会自动安装所需要的虚拟网卡驱动

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/e8512689f0dd436f0f8e0.png" alt="img" width="100%">`


>注：安装驱动时如果出现Windows安全提示，请信任即可

### 3. 填入信息

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/0da5e82c6507faf143936.png" alt="img" width="100%">`

- **服务器**：填入supernode所在服务器的`ip:端口`或者`域名:端口`（如果有域名）
- **虚拟网ip**：随意，但是需要互连的客户端需使用相同的网段，如：`192.168.10.3`和`192.168.10.23`，如果设置了自动分配虚拟ip，则可以勾选自动分配！
- **小组名称**：随意，但是需要互连的客户端需使用相同的组名称，如果设置了组名称白名单，则需要用白名单内的组名称

### 4. 关闭防火墙

- **第一步**：点击测试工具

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/77a76fffbed0f76bb9a6b.png" alt="img" width="100%">`

- **第二步**：点击关闭防火墙，并确定

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/8d1151d3f4835cdd32f7e.png" alt="img" width="100%">`

- **第三步**：点击启动

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/6c63e15bce039124da18f.png" alt="img" width="100%">`

## 服务器右侧出现绿色小勾代表连接成功

`Gmeek-html<img src="https://img.liyifan.xyz/file/72bc7f13811bb65fbdcb6.png" data-src="https://img.liyifan.xyz/file/5fb43167d3758bfce157f.png" alt="img" width="100%">`

### 现在可以ping其他客户端的虚拟ip试试了^_^

> [!TIP]
> 连接正常，但是ping不通的情况下，可以尝试更换虚拟ip网段，比如：从`192.168.10.x`替换为`172.28.2.x`






