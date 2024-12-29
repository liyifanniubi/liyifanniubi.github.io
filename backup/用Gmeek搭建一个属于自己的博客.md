[Gmeek](https://github.com/Meekdai/Gmeek)博客完全依托github，提供域名，无需服务器，比起传统的服务器建站更方便快捷。

> [!IMPORTANT]
> 博客中的内容将完全公开，不要上传隐私内容！！

## 一、创建github仓库

### 1. 登录github

> 没有账号的话可以在github主页注册

### 2. 进入[Gmeek](https://github.com/Meekdai/Gmeek)仓库

https://github.com/Meekdai/Gmeek

### 3. 创建仓库

在Gmeek仓库的readme中点击`通过模板创建仓库`

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/e860fa26fc02859344a77.png" alt="img" width="100%">`

会打开如下网页：

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/c4fc9e5406082ab8eaf02.png" alt="img" width="100%">`

在`Repository name`处填写`github账号的名字.github.io`

> 比如github账号的名字是`liyifan`，就填写`liyifan.github.io` 

> [!NOTE]
> `Repository name`可以随意填写，但是为了之后生成的域名简短，最好填`github账号的名字.github.io`

最后点击`create repository`完成仓库创建！

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/e7a2658c391bb245ff30f.png" alt="img" width="100%">`

## 二、配置仓库

### 1. 进入刚刚创建完成的仓库，点击`settings`

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/edc56fb31b0510b441497.png" alt="img" width="100%">`

### 2. 进入`pages`分页

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/89198898a426807f1ed19.png" alt="img" width="100%">`

### 3. 将构建方式改为`github actions`

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/5adfdac21ba9da137f6e4.png" alt="img" width="100%">`

> [!NOTE]
> 关于自定义域名，可以在下方的`custom domain`中填写，需要一个二级域名，并添加cname解析，指向`github账号的名字.github.io`
`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/8f04f09bdcdf8fd81cd6f.png" alt="img" width="100%">`
`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/98294a9f9b913b9caf96b.png" alt="img" width="100%">`



### 4. 进入`issues`页面，然后点击`new issue`

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/087b466ec09136a170fa9.png" alt="img" width="100%">`

### 5. 随意填入标题和正文，随意添加一个`标签（lable）`，然后点击`submit new issue`

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/7bc0d98eed8e4fe84484c.png" alt="img" width="100%">`

此时在`actions`界面中可以看到正在构建，等待一分钟左右直到构建完成

### 6. 回到`code`界面，此时域名已经生成

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/68b636609b57df758edc2.png" alt="img" width="100%">`

> 如果没添加自定义域名，域名会是xxx.github.io

## 三、修改配置文件

### 1.打开`config.json`

在code界面点击`config.json`

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/4dcf3ca2c7fbc0f740eba.png" alt="img" width="100%">`

点击钢笔图案开始编辑

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/ca56f9adf974763b3d6ae.png" alt="img" width="100%">`

### 2. [配置参数](https://blog.meekdai.com/post/Gmeek-kuai-su-shang-shou.html)

> [!CAUTION]
>最后一行配置末尾不需要逗号，其他行末尾都需要逗号（英文逗号）

```
{
    "title":"Meekdai",
    "subTitle":"童话是一种生活态度，仅此而已。",
    "avatarUrl":"https://github.githubassets.com/favicons/favicon.svg",
    "GMEEK_VERSION":"last"
}
```

以上是必须的字段，下面是可以自定义字段的描述，可以选择加入到`config.json`中。

```
"displayTitle":"Meekdai",
"homeUrl":"http://blog.meekdai.com",
"faviconUrl":"https://github.githubassets.com/favicons/favicon.svg",
"email":"meekdai@163.com",
"startSite":"02/16/2015",
"filingNum":"浙ICP备20023628号",
"onePageListNum":15,
"singlePage":["about"],
"iconList":{"music":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"},
"exlink":{"music":"https://music.meekdai.com"},
"commentLabelColor":"#006b75",
"yearColorList":["#bc4c00", "#0969da", "#1f883d", "#A333D0"],
"i18n":"CN",
"UTC":8,
"themeMode":"manual",
"dayTheme":"light",
"nightTheme":"dark_colorblind",
"urlMode":"pinyin",
"style":"",
"script":"",
"indexStyle":"",
"indexScript":"",
"showPostSource":1,
"rssSplit":"sentence",
"bottomText":"转载请注明出处",
"ogImage":"https://cdn.jsdelivr.net/gh/Meekdai/meekdai.github.io/logo64.jpg",
"primerCSS":"<link href='https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/Primer/21.0.7/primer.css' rel='stylesheet' />",
"needComment":0,
```

| 配置参数           | 说明                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------- |
| title              | 【必填】博客标题                                                                       |
| subTitle           | 【必填】博客描述&自述                                                                 |
| avatarUrl          | 【必填】博客头像                                                                       |
| GMEEK_VERSION      | 【必填】Gmeek 版本，一般写 last 也可以用具体 tag 版本                                  |
| displayTitle       | 用于头像后面的标题展示，如果和 title 一致则不用添加                                    |
| homeUrl            | 博客的主页地址，自定义域名时需要配置                                                    |
| faviconUrl         | 页面的 favicon 地址，如果和 avatarUrl 一致则不用添加                                   |
| email              | 用于自动提交仓库时用，不添加也可以                                                      |
| startSite          | 用于页面底部显示网站运行天数                                                            |
| filingNum          | 用于页面底部显示备案信息                                                                |
| onePageListNum     | 用于首页每页展示的文章数量                                                              |
| singlePage         | 自定义独立页面，例如 about 或者 link 等                                                 |
| iconList           | 用于定义 singlePage 按钮展示的 SVG 图标 (16px)，about 和 link 内置无需定义             |
| exlink             | 用于自定义首页右上角圆形按钮到外部链接功能，按钮图标定义在 iconList 中                    |
| commentLabelColor  | 用于自定义显示评论数量标签的颜色                                                        |
| yearColorList      | 用于自定义显示不同年份标签的颜色                                                        |
| i18n               | 用于定义博客语言，目前支持 EN/CN/RU                                                    |
| UTC                | 用于定义时区                                                                           |
| themeMode          | 用于定义主题模式，默认为 manual，也可选择 fix 详细说明                                   |
| dayTheme           | 用于定义亮主题                                                                         |
| nightTheme         | 用于定义暗主题                                                                         |
| urlMode            | 用于定义文章链接生成模式，目前支持 pinyin/issue/ru_translit                              |
| style              | 用于自定义文章页全局 CSS                                                               |
| script             | 用于自定义文章页全局 JavaScript                                                         |
| indexStyle         | 用于自定义首页 CSS                                                                     |
| indexScript        | 用于自定义首页 JavaScript                                                               |
| showPostSource     | 设置为 1 则在文章页显示 issue 链接按钮，设置为 0 则不显示                                 |
| rssSplit           | 设置 RSS 输出的截断符号，默认 sentence 为第一句话，可配置其他特殊符号                    |
| bottomText         | 用于设置文章页面右下角显示的内容                                                        |
| ogImage            | 用于设置 Open Graph 协议展示的图片                                                      |
| primerCSS          | 用于设置 primer.css 的 CDN 地址，默认使用南科大                                          |
| needComment        | 用于设置是否需要评论功能，1 开启评论，0 关闭                                             |

> [!NOTE]
> 一般默认的配置文件修改后就可以了，无需额外添加！

### 3. 应用配置文件

进入`actions`界面，点击`build gmeek`，选择`run workflow`并点击

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/6fc709491a266dee0d820.png" alt="img" width="100%">`

等待一分钟左右直到完成

## 到此Gmeek博客搭建全部完成

`Gmeek-html<img src="https://img.liyifan.xyz/file/2c0aba70ff4a96a5b06cd.png" data-src="https://img.liyifan.xyz/file/6d96abb3b04bbf1c681f9.png" alt="img" width="100%">`

## Gmeek博客基本使用方法

- 写、发文章：在`issues`里提交新issue
> 必须至少包含一个`标签（lable）`
- 删除文章：关闭或删除对应issue，然后在`action`中的`build gmeek`里`run workflow`
- 置顶文章：pin文章对应的`issue`
- 标题目录列表：
```
<!-- ##{"script":"<script src='https://blog.liyifan.xyz/assets/GmeekTOC.js'></script>"}## -->
```
- 回到顶部按钮：
```
<!-- ##{"script":"<script src='https://blog.liyifan.xyz/assets/backtotop.js'></script>"}## -->
```
- 插入图片：
```
`Gmeek-html<img src="" alt="" width="100%">`
```
- 插入网易云外链播放器：
```
`Gmeek-html<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="100%" height="86" src="https//music.163.com/outchain/player?type=2&amp;id=xxxxxxxx&amp;auto=1&amp;height=66"></iframe>`
```
- 插入视频：
```js
`Gmeek-html<video src="" type="video/xxx" controls width="100%"></video>`
autoplay //自动播放
loop //循环播放
muted //静音
poster //第一帧加载之前的预览图
```

- 文章内标题跳转
[修改配置文件](#三、修改配置文件)
```
[修改配置文件](#三、修改配置文件)
```
> [!CAUTION]
> 如果没添加`TOC目录插件`，则需要添加一个给标题加id的插件
> ```
> <!-- ##{"script":"<script src='https://blog.liyifan.xyz/assets/subtitle_id.js'></script>"}## -->
> ```

