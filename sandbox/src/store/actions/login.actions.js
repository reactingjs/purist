// @flow

import type { Dispatch as ReduxDispatch } from 'redux'

import { getValueFromLocalStorage } from 'g2-settings'
import { RESTORED_LOGIN } from 'constants/actionTypes'

export const restoreLogin = () => (dispatch: ReduxDispatch<{ type: string }>) => {
  dispatch({
    type: RESTORED_LOGIN,
    login: getValueFromLocalStorage('login'),
  })
}
