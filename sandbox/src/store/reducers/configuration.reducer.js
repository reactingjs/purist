// @flow

import { pathOr } from 'ramda'

import {
  CONFIGURATIONS_REQUESTED,
  CONFIGURATIONS_RESPONDED
} from '../constants/actionTypes'

type ConfigurationsRespondedType = {
  type: string,
  configurations: ConfigurationType
}

type ConfigurationsRequestedType = {
  type: string
}

type ConfigurationType = {
  [string]: string | ConfigurationType
}

export type ConfigurationActionType =
  | { type: 'CONFIGURATIONS_REQUESTED' }
  | { type: 'CONFIGURATIONS_RESPONDED', configurations: ConfigurationType }

type StateType = {
  isLoading: boolean,
  configurations: ConfigurationType
}

const initialState = {
  configurations: {},
  isLoading: false
}

const configurationReducer = (
  state: StateType = initialState,
  action: ConfigurationActionType
) => {
  switch (action.type) {
    case CONFIGURATIONS_RESPONDED: {
      return {
        ...state,
        isLoading: false,
        configurations: action.configurations
      }
    }
    case CONFIGURATIONS_REQUESTED: {
      return {
        ...state,
        isLoading: true
      }
    }
    default: {
      return state
    }
  }
}

export const getConfig = (state: any) => (path: string) =>
  pathOr('', ['configurations', path.split('.')], state)
export const getIsLoading = (state: any) =>
  pathOr(false, ['configurations', 'isLoading'], state)

export default configurationReducer
