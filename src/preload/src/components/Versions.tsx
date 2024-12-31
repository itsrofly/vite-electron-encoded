import { useState } from 'react'
import { electronAPI } from '@electron-toolkit/preload'

function Versions(): JSX.Element {
  const [versions] = useState(electronAPI.process.versions)

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
    </ul>
  )
}

export default Versions
