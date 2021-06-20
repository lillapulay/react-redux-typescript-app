import React from 'react'

import { FlagProps } from '../../types'

function Flag({ flagUrl }: FlagProps) {
  return <img className="countryFlag" src={flagUrl} alt="flag" />
}

export default Flag
