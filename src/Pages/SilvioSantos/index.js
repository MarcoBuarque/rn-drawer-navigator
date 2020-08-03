import React from 'react'

import { silvioSantos } from '../../Utils/constants'

import * as Utils from '../../Components/Utils'
import Header from '../../Components/Header'

export const SilvioSantos = () => (
  <Utils.Container>
    <Header title='SilvioSantos' />
    <Utils.View>
      <Utils.Text>{silvioSantos}</Utils.Text>
    </Utils.View>
  </Utils.Container>
)

export default SilvioSantos