// @flow

import { RESTORED_SETTINGS } from 'constants/actionTypes'

const initialState = {}

type ActionType = {
  type: string,
  settings: any,
}

type SettingsStateType = any

const settingsReducer = (state: SettingsStateType = initialState, action: ActionType): SettingsStateType => {
  switch (action.type) {
    case RESTORED_SETTINGS: {
      return {
        ...state,
        ...action.settings,
      }
    }
    default: {
      return state
    }
  }
}

export default settingsReducer
