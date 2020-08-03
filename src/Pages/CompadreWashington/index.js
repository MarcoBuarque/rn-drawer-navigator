import React from 'react'

import { compadreWashington } from '../../Utils/constants'

import * as Utils from '../../Components/Utils'
import Header from '../../Components/Header'

export const CompadreWashington = () => (
  <Utils.Container>
    <Header title='CompadreWashington' />
    <Utils.View>
      <Utils.Text>{compadreWashington}</Utils.Text>
    </Utils.View>
  </Utils.Container>
)

export default CompadreWashington