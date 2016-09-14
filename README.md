# WestGate
React Native Starter Kit
===
[![React Native](https://img.shields.io/badge/react%20native-0.33.0-brightgreen.svg)](https://github.com/facebook/react-native)

尽管iOS和Android是两个不同的平台，各自都有属于自己风格的设计模式和操作习惯，但在实际项目中，往往期望两个平台的应用尽可能相似，这样可以减少用户的学习成本。例如Tabbar组件，虽然是属于iOS的标配组件，但在Android的平台上也经常希望使用Tabbar，所以此项目的目的是创建一个操作习惯和设计风格接近的 react-natvie starter kit。

## 截图
<img src="http://7xlphv.com1.z0.glb.clouddn.com/develop/westgate/screenshot_android.png" width="240px" height="400px"/>  <img src="http://7xlphv.com1.z0.glb.clouddn.com/develop/westgate/screenshot_ios.png" width="240px" height="400px"/>

## 使用
### 下载
```
$ git clone https://github.com/wangenyong/westgate.git YourAppName
$ cd YourAppName
$ ./support/rename.sh YourAppName
$ npm install
```
### 运行
```
$ react-native run-ios
$ react-native run-android
```
## 依赖
* [es6-symbol](https://github.com/medikoo/es6-symbol)
* [immutable](https://github.com/facebook/immutable-js/)
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
* [react-redux](https://github.com/reactjs/react-redux)
* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [redux-loop](https://github.com/redux-loop/redux-loop)
* [redux-promise](https://github.com/acdlite/redux-promise)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
