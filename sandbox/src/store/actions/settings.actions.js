// @flow

import type { Dispatch as ReduxDispatch } from 'redux'

import { getValueFromLocalStorage } from 'g2-settings'
import { RESTORED_SETTINGS } from 'constants/actionTypes'

export const restoreSettings = () => (dispatch: ReduxDispatch<{ type: string }>) => {
  dispatch({
    type: RESTORED_SETTINGS,
    settings: getValueFromLocalStorage('settings'),
  })
}
