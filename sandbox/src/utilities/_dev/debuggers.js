import debug from 'debug'

export default {
  ['process.env']() {
    debug('[ yard-app / process.env ]')({
      CONFIG_SERVER_NAME: process.env.CONFIG_SERVER_NAME,
      CONFIG_FILE_NAME: process.env.CONFIG_FILE_NAME,
      APPLICATION_NAME: process.env.APPLICATION_NAME,
      SESSION_SECRET: process.env.SESSION_SECRET,
      SESSION_ID: process.env.SESSION_ID,
      AUTH_TOKEN: process.env.AUTH_TOKEN,
      ME_SERVICE: process.env.ME_SERVICE,
      PROFILES: process.env.PROFILES
    })
  }
}
