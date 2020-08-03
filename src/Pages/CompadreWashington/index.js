import React from 'react'
import { ScrollView } from 'react-native'

import { compadreWashington } from '../../Utils/constants'

import * as Utils from '../../Components/Utils'
import Header from '../../Components/Header'

export const CompadreWashington = () => (
  <Utils.Container flex={1}>
    <Header title='CompadreWashington' />
    <ScrollView showsVerticalScrollIndicator={false}>
      <Utils.View>
        <Utils.Text>{compadreWashington}</Utils.Text>
      </Utils.View>
    </ScrollView>
  </Utils.Container>
)

export default CompadreWashington