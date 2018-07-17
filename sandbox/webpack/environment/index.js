import fs from 'fs'

import { verifyEnv } from './verification'
import devEnvs from './process.env'

export const loadEnvs = () => {
  if (__DEV__) {
    const envs = require('./process.env')

    Object.entries(envs).forEach(([key, value]) => {
      process.env[key] = value
    })
  }

  verifyEnv()
}
