import React from 'react'
import Proptypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import * as Utils from './../Utils'

export const SectionButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={() => onPress({ routeName: title })}>
    <Utils.View paddingLeft={10} paddingTop={10}>
      <Utils.Text>{title}</Utils.Text>
    </Utils.View>
  </TouchableOpacity>
)

SectionButton.propTypes = {
  title: Proptypes.string.isRequired,
  onPress: Proptypes.func
}

SectionButton.defaultProps = {
  onPress: () => {}
}