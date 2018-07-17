import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import hotOrNot from './utilities/_dev/hotOrNot'
import { AppFrame } from '@copart/ops-app-frame'
import { AppHome } from '#views'
import debuggers from '#utilities/_dev/debuggers'

__DEV__ && localStorage.setItem('debug', '*yard-app*')
__DEV__ && debuggers['process.env']()

export const App = hotOrNot(() => {
  return (
    <AppFrame>
      <h1>aefaefa</h1>
    </AppFrame>
  )
})
