// @flow

import type { Dispatch as ReduxDispatch } from 'redux'

import { getValueFromSessionStorage, getValueFromLocalStorage } from 'g2-settings'

import { RESTORED_DASHBOARD } from 'constants/actionTypes'

export const restoreDashboard = () => (dispatch: ReduxDispatch<{ type: string, dashboard: any }>) => {
  const dashboard = getValueFromSessionStorage('dashboard')
  dispatch({
    type: RESTORED_DASHBOARD,
    dashboard,
  })
}
