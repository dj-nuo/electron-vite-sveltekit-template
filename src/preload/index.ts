/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  send: (channel: string, data: any) => {
    ipcRenderer.send(channel, data)
  },
  sendSync: (channel: string, data: any) => {
    return ipcRenderer.sendSync(channel, data)
  },
  receive: (channel: string, func: (arg0: any) => void) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args))
  }
})
