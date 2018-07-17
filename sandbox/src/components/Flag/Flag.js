import * as React from 'react'
import { flags } from './flags/flags.js'

export const Flag = ({ countryCode, type }) => {
  const imgProps = type === 'cas' ? { height: '22px' } : { height: '30px' }
  return <img src={`${flags[countryCode]}`} alt="Flag" {...imgProps} />
}
