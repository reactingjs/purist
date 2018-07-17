// @flow

import type { Dispatch } from 'redux'
import type { ConfigurationActionType } from 'reducers/configuration.reducer'

import {
  CONFIGURATIONS_REQUESTED,
  CONFIGURATIONS_RESPONDED
} from 'constants/actionTypes'
import xhr from 'utils/xhr'

export const fetchConfigurations = () => (
  dispatch: Dispatch<ConfigurationActionType>
) => {
  dispatch({
    type: CONFIGURATIONS_REQUESTED
  })
  xhr.get('/api/configurations').then((configurations) => {
    dispatch({
      type: CONFIGURATIONS_RESPONDED,
      configurations
    })
  })
}
