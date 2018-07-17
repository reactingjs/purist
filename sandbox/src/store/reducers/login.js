// @flow

import { RESTORED_LOGIN } from '../constants/actionTypes'

const initialState = {}

type ActionType = {
  type: string,
  login: any
}

type LoginStateType = any

const loginReducer = (
  state: LoginStateType = initialState,
  action: ActionType
): LoginStateType => {
  switch (action.type) {
    case RESTORED_LOGIN: {
      return {
        ...state,
        ...action.login
      }
    }
    default: {
      return state
    }
  }
}

export default loginReducer
