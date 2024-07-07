win11在语音通话的时候，麦克风音量经常被自动下调，导致我听不清对方声音，所以我一气之下。。。

## [下载点这](https://wwf.lanzouo.com/ie4NM23u899c)


### 1. 获取麦克风音量

```python
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

# 获取麦克风设备
devices = AudioUtilities.GetMicrophone()

# 激活音量控制接口
interface = my_mic.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)

# 获取音量控制指针
volume = cast(interface, POINTER(IAudioEndpointVolume))

# 获取当前音量
current_volume = volume.GetMasterVolumeLevel()

# 获取音量范围
min_volume, max_volume, _ = volume.GetVolumeRange()

# 调整麦克风音量
volume.SetMasterVolumeLevel(vol, None)
```

### 2. 持续检测并调整

```python
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
import datetime
import time

mic = AudioUtilities.GetMicrophone()
interface = mic.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

while True:
    v_v = volume.GetMasterVolumeLevel()
    #print('MIC音量值为', v_v)

    if v_v < target:
        volume.SetMasterVolumeLevel(target, None)
        hour = datetime.datetime.now().hour
        minute = datetime.datetime.now().minute
        print(f'{hour}:{minute} 麦克风音量调至{target}')

    time.sleep(sleep)
```

### 3. 添加配置文件便于调整

```python
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
import json
import os

mic = AudioUtilities.GetMicrophone()
interface = mic.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

# 检查config.json结构是否错误
try:
    with open('config.json', 'r',encoding='utf-8') as f:
        config = json.load(f)
    target = config['target']
    sleep = config['sleep']
    volume.SetMasterVolumeLevel(target, None)
except:
    if os.path.exists('config.json'):
        os.remove('config.json')
        print('配置文件config.json错误，已删除')

# 生成配置文件
if not os.path.exists('config.json'):
    min_volume, max_volume, _ = volume.GetVolumeRange()
    print('麦克风音量范围:', min_volume, max_volume)

    with open('config.json', 'w',encoding='utf-8') as f:
        json.dump({'target': max_volume, '//target': f'{min_volume}~{max_volume}', 'sleep': 0.5}, f, indent=4)
    print('已生成配置文件config.json')
    target = max_volume
    sleep = 0.5
```

### 4. 完整代码

```python
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
import datetime
import time
import json
import os


mic = AudioUtilities.GetMicrophone()
interface = mic.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

try:
    with open('config.json', 'r',encoding='utf-8') as f:
        config = json.load(f)
    target = config['target']
    sleep = config['sleep']
    volume.SetMasterVolumeLevel(target, None)
except:
    if os.path.exists('config.json'):
        os.remove('config.json')
        print('配置文件config.json错误，已删除')

if not os.path.exists('config.json'):
    min_volume, max_volume, _ = volume.GetVolumeRange()
    print('麦克风音量范围:', min_volume, max_volume)

    with open('config.json', 'w',encoding='utf-8') as f:
        json.dump({'target': max_volume, '//target': f'{min_volume}~{max_volume}', 'sleep': 0.5}, f, indent=4)
    print('已生成配置文件config.json')
    target = max_volume
    sleep = 0.5




print('开始监听...')

while True:
    v_v = volume.GetMasterVolumeLevel()
    #print('MIC音量值为', v_v)

    if v_v < target:
        volume.SetMasterVolumeLevel(target, None)
        hour = datetime.datetime.now().hour
        minute = datetime.datetime.now().minute
        print(f'{hour}:{minute} 麦克风音量调至{target}')

    time.sleep(sleep)
```

### 5. pyinstaller打包

```cmd
cd /d <path>
pyinstaller --onefile mic.py
```

得到`mic.exe`

### 6. 编写脚本

启动脚本`run.bat`：

```cmd
@echo off
if "%1" == "h" goto begin
mshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit
:begin

python <path_to>/mic.py
```

> 关闭cmd窗口后台运行

关闭脚本`kill.bat`：

```cmd
taskkill /IM python.exe /F
pause
```

### 7. 把启动脚本加入系统启动项

`windows`+`R`
```
shell:startup
```
把`run.bat`的快捷方式放入`startup`文件夹，实现开机自动静默启动

## 效果图

`Gmeek-html<img src="https://img-5yy.pages.dev/file/2cc80eb1d372209f79369.gif" width="100%">`

`Gmeek-html<img src="https://img-5yy.pages.dev/file/e6c93445272961ac95054.png" width="100%">`


