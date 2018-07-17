// @flow

import { RESTORED_DASHBOARD } from '../constants/actionTypes'

const initialState = {}

type ActionType = {
  type: string,
  dashboard: any
}

type DashboardStateType = any

const dashboardReducer = (
  state: DashboardStateType = initialState,
  action: ActionType
): DashboardStateType => {
  switch (action.type) {
    case RESTORED_DASHBOARD: {
      return {
        ...state,
        ...action.dashboard
      }
    }
    default: {
      return state
    }
  }
}

export default dashboardReducer
