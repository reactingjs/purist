import invariant from 'invariant'

const env = (key) => {
  return process.env[key]
}

export const verifyEnv = () => {
  const debug = require('debug')('[ yard-app ∞ verification ]')

  // Log the environment variables in debug mode.
  // i.e DEBUG="*yard-app*"
  environmentHelper(debug)

  // Break if environment variables are missing.
  environmentHelper(invariant)
}

const environmentHelper = (tool) => {
  tool(!!env('CONFIG_SERVER_NAME'), envEqualityString('CONFIG_SERVER_NAME'))
  tool(!!env('APPLICATION_NAME'), envEqualityString('APPLICATION_NAME'))
  tool(!!env('PROFILES'), envEqualityString('PROFILES'))

  // tool(!!env('SESSION_SECRET'), envEqualityString(`SESSION_SECRET`))
  // tool(!!env('SESSION_ID'), envEqualityString(`SESSION_ID`))
  // tool(!!env('AUTH_TOKEN'), envEqualityString(`AUTH_TOKEN`))
  // tool(!!env('ME_SERVICE'), envEqualityString('ME_SERVICE'))
}

const envEqualityString = (target) => {
  const name = `process.env.${target}`
  const value = process.env[target]
  return `${name} === ${value}`
}
