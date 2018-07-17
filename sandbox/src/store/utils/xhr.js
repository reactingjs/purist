// @flow

import axios from 'axios'
import uuid from 'uuid'

import getAccessToken from './cookie'

const xhr = axios.create()

const countryCode = 'US'

xhr.interceptors.request.use(
  (xhrConf) => {
    const accessToken = getAccessToken()
    const headers = xhrConf.headers
    // solr check so that there is no authentication in solr queries
    if (xhrConf.url.indexOf('/solr/') !== -1) {
      xhrConf.url = `${xhrConf.url}&cl=${clientName}`
      return xhrConf
    }
    if (
      xhrConf.url.indexOf('referencedata-ws') !== -1 &&
      xhrConf.url.indexOf('referencedata-ws/states') === -1 &&
      xhrConf.url.indexOf('sprocs') === -1
    ) {
      headers.Version = '2.0'
    }
    if (accessToken && headers) {
      headers.Authorization = `bearer ${accessToken}`
      headers['Content-Type'] = 'application/json'
      headers.countryCode = xhrConf.imageRequest ? 'US' : countryCode
      headers.partnerCode = 'en'
      headers.source = 'mobile'
    }
    headers.correlationID = `cas-uuid-${uuid()}`
    return xhrConf
  },
  (error) => {
    console.error(error) //eslint-disable-line
    return Promise.reject(error)
  }
)

export default xhr
