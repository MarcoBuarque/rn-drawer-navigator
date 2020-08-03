import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import * as Utils from './../Utils'

export const SectionButton = ({ title, onPress, image }) => (
  <TouchableOpacity onPress={() => onPress({ routeName: title })}>
    <Utils.View paddingLeft={10} paddingTop={10}>
      <Utils.Row alignItems='center'>
      <Image source={image} style={styles.image} />
        <Utils.Text>{title}</Utils.Text>
      </Utils.Row>
    </Utils.View>
  </TouchableOpacity>
)

SectionButton.propTypes = {
  title: Proptypes.string.isRequired,
  onPress: Proptypes.func,
  image: Proptypes.number
}

SectionButton.defaultProps = {
  onPress: () => {},
  image: require('./../../Assets/default.jpg')
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 10
  }
})