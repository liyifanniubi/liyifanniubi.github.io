周末闲的蛋疼，搞个饥荒服务器和朋友耍耍

> 环境：Ubuntu 22.04 server 64bit云服务器，root用户

## 一、安装依赖项

```
add-apt-repository multiverse
dpkg --add-architecture i386
apt update
apt install libstdc++6 libgcc1 libcurl4-gnutls-dev:i386 lib32z1
```

## 二、安装服务端

### 1. 安装，启动`steamcmd`

```
mkdir ~/steamcmd
cd ~/steamcmd
wget https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz 
tar -xvzf steamcmd_linux.tar.gz         #解压
./steamcmd.sh
```
> 等待更新，直到出现`steam>`
`Gmeek-html<img src="https://img-5yy.pages.dev/file/8ccc538464f59a848ae23.png" width="100%">`

### 2. 下载饥荒服务端

>在`steam>`后输入命令
```
login anonymous
force_install_dir ../dontstarvetogether_dedicated_server
app_update 343050
```

> [!CAUTION]
> `app_update`不要加入`validate`参数

耐心等待下载完成

`Gmeek-html<img src="https://img-5yy.pages.dev/file/4b7083b4de7bf47de8809.png" width="100%">`

~~太慢了太慢了真的太慢了~~ T^T

下载完成后输入`quit`退出`steamcmd`

`Gmeek-html<img src="https://img-5yy.pages.dev/file/e8e0f2029cf50830509b0.png" width="100%">`

### 3. 创建饥荒存档目录

```
mkdir -p ~/.klei/DoNotStarveTogether/Cluster_1
```


## 三、 生成存档

### 1. 打开`steam`中的`饥荒`

`Gmeek-html<img src="https://img-5yy.pages.dev/file/49abb3beda1f0f72027d2.png" width="100%">`

### 2. 订阅mod（可选）

> 开加速器

在饥荒创意工坊选择mod并订阅

### 3. 创建世界

点击`创建游戏`→`创建新世界`→按照要求调整难度和规则→点击`模组`，勾选所有需要的mod→点击生成世界

> [!TIP]
> mod可能会有兼容性问题，如果一直开者无法生成世界，可以一一排查出有问题的mod删除

### 4. 进入选人界面后退回主界面

### 5. 点击`创建游戏`→ 点击刚刚创建世界右侧的扳手图标→ 点击打开世界文件夹

`Gmeek-html<img src="https://img-5yy.pages.dev/file/83b5b58677d1c30f5cbdc.png" width="100%">`





## 四、获取token和配置

### 1. 进入[Klei官网](https://accounts.klei.com/login)

https://accounts.klei.com/login

选择steam登录

### 2. 选择`游戏`进入饥荒服务器界面

`Gmeek-html<img src="https://img-5yy.pages.dev/file/ff61aaf485279aeb55023.png" width="100%">`

### 3. 新建服务器，进入配置界面

`Gmeek-html<img src="https://img-5yy.pages.dev/file/57d6f5cee5a2edd74411a.png" width="100%">`

### 4. 填好信息后点击下载设置

`Gmeek-html<img src="https://img-5yy.pages.dev/file/2c9039d271f30fc64f487.png" width="100%">`

下载完成后打开压缩包

`Gmeek-html<img src="https://img-5yy.pages.dev/file/71a2d42329a53650c4530.png" width="100%">`


## 五、上传存档

### 1. 替换配置文件

把压缩包中`cluster.ini`,`cluster_token.txt`,`Cave`文件夹中的`server.ini`,`Master`文件夹中的`server.ini`替换到`步骤三中打开的存档文件夹`中的相同位置

### 2. 打开[FileZilla](https://filezilla-project.org/)

> https://filezilla-project.org/

### 3. 远程sftp连接服务器

`Gmeek-html<img src="https://img-5yy.pages.dev/file/8baf7f166f0d1c7dce591.png" width="100%">`

### 4. 把`本地存档文件夹`中的文件上传到`云服务器存档文件夹`中

`Gmeek-html<img src="https://img-5yy.pages.dev/file/5b6eeacec9c8cc3acd148.png" width="100%">`

> 拖拽进去！！

> [!NOTE]
> 如果添加了mod，需要把mod的代码添加进`~/dontstarvetogether_dedicated_server/mods/dedicated_server_mods_setup.lua`
`Gmeek-html<img src="https://img-5yy.pages.dev/file/5d6de16f0b40b6badd8f0.png" width="100%">`
`Gmeek-html<img src="https://img-5yy.pages.dev/file/e64c38db8901f73232689.png" width="100%">`
mod代码可以从`本地存档文件夹/Master/modoverrides.lua`中找到！！




## 六、创建启动脚本并运行

```
cd ~
vim jihuang.sh
```

按`任意字母键`后输入：

```
#!/bin/bash

steamcmd_dir="$HOME/steamcmd"
install_dir="$HOME/dontstarvetogether_dedicated_server"
cluster_name="MyDediServer"
dontstarve_dir="$HOME/.klei/DoNotStarveTogether"

function fail()
{
	echo Error: "$@" >&2
	exit 1
}

function check_for_file()
{
	if [ ! -e "$1" ]; then
		fail "Missing file: $1"
	fi
}

cd "$steamcmd_dir" || fail "Missing $steamcmd_dir directory!"

check_for_file "steamcmd.sh"
check_for_file "$dontstarve_dir/$cluster_name/cluster.ini"
check_for_file "$dontstarve_dir/$cluster_name/cluster_token.txt"
check_for_file "$dontstarve_dir/$cluster_name/Master/server.ini"
check_for_file "$dontstarve_dir/$cluster_name/Caves/server.ini"

./steamcmd.sh +force_install_dir "$install_dir" +login anonymous +app_update 343050 validate +quit

check_for_file "$install_dir/bin64"

cd "$install_dir/bin64" || fail

run_shared=(./dontstarve_dedicated_server_nullrenderer_x64)
run_shared+=(-console)
run_shared+=(-cluster "$cluster_name")
run_shared+=(-monitor_parent_process $$)

"${run_shared[@]}" -shard Caves  | sed 's/^/Caves:  /' &
"${run_shared[@]}" -shard Master | sed 's/^/Master: /'
```

按`esc`后输入`:wq`保存脚本

给可执行权限
```
chmod u+x ~/jihuang.sh
```

### 最后，启动脚本

```
screen -S jihuang
~/jihuang.sh
```

成功运行后按`ctrl+A+D`热键，放入后台运行

> [!IMPORTANT]
> 在服务器防火墙或安全组里放行`11000`,`11001`,`10889`端口的udp协议
`Gmeek-html<img src="https://img-5yy.pages.dev/file/781620cb24d35c0d81fb7.png" width="100%">`

## ~~不出意外的话~~，这服务器就~~可算~~搭建完成了！

`Gmeek-html<img src="https://img-5yy.pages.dev/file/9128077c76906dfe1ec3e.jpg" width="100%">`










