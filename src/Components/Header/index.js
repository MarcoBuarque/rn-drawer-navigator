import React from 'react'
import { StyleSheet } from 'react-native'
import Proptypes from 'prop-types'

import { Text, Row } from './../Utils'

export const Header = ({ title, rightComponent }) => (
  <Row style={styles.container} alignItems='center' justifyContent='space-between'>
    <Text size={24}>{title}</Text>
    {rightComponent && rightComponent()}
  </Row>
)

Header.Proptypes = {
  title: Proptypes.string,
  rightComponent: Proptypes.elementType
}

Header.defaultProps = {
  title: 'Title'
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderBottomWidth: 1
  }
})

export default Header
