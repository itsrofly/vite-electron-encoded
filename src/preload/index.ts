import { contextBridge } from 'electron'
import { renderReactComponent } from './src/main'


// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('renderReactComponent', renderReactComponent)
  } catch (error) {
    console.error(error)
  }
}
