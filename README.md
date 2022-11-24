# My-PearOCR
大伙可以去体验一下PearOCR官方 https://pearocr.com/#/ 功能   
前端OCR识别是个很好的思路，这样识别的消耗完全由客户游览器承担，节省了大量服务器和网络资源   
在众多开源OCR识别中我发现PearOCR是集精度，使用体验最好的一个，可惜PearOCR没有开源也没有SDK，那么我们如何把PearOCR集成到自己的前端项目中呢？    
My-PearOCR是一种集成PearOCR的Demo实验，为集成PearOCR提供一种思路，请勿用于商业用途！！！    



## Demo
https://ocr.midaug.win/   
离线资源有点多，打开网页后查看控制台出现antOcr.onSetLangFinish消息即为全部加载成功   

   
## 原理
My-PearOCR是对PearOCR的前端再包装，通过隐藏iframe的方式将PearOCR内嵌到我们自己的网站中。通过jquery访问iframe中PearOCR操作按钮，并扫描PearOCR页面元素变化来获取识别结果   
具体请看PearOCR目录中my.html的源码   
PearOCR中除了jquery-3.6.1.min.js、my.html文件外其余都从 https://pearocr.com/#/ 中下载下来，下载时间为2022年11月24日其PearOCR版本为2.1，为解决其中一些运行错误问题修改了极小部分源码

## 部署
以此项目部署调试   
1：clone 本仓库    
2：在仓库目录中执行 python -m SimpleHTTPServer 即可

