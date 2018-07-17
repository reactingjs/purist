export const getAccessToken = () => {
  let accessToken = document.cookie
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.match(/^access_token/))

  return accessToken && accessToken.split('=')[1]
}
