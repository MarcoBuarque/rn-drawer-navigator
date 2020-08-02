import React from 'react'

import { compadreWashington } from './../../Utils/constants'

import * as Utils from './../../Components/Utils'
import Header from './../../Components/Header'

export const About = () => (
  <Utils.Container>
    <Header title='About' />
    <Utils.View>
      <Utils.Text>{compadreWashington}</Utils.Text>
    </Utils.View>
  </Utils.Container>
)

export default About