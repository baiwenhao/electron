/*
* @Author: wenhao
* @Date:   2022-04-21 22:32:45
* @Last Modified by:   Bai Wenhao
* @Last Modified time: 2022-04-22 00:54:17
*/

// https://github.com/electron-userland/electron-webpack-quick-start
const { app, BrowserWindow } = require('electron')

let mainWindow

// 创建主窗口，设置了宽高等信息
function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      // node集成，即是否注入node能力
      // nodeIntegration: true
    }
  })

  mainWindow.loadFile('https://www.baidu.com')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)