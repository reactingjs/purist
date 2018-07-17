export const objectToQuery = (obj) => {
  const parts = []
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (Array.isArray(obj[i])) {
        ;[...new Set(obj[i])].map((val) => parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(val)}`))
      } else {
        parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`)
      }
    }
  }
  return parts.join('&')
}
