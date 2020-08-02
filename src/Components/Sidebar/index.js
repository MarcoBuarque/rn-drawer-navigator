import React, { useEffect } from 'react'
import { FlatList } from 'react-native'

import * as Utils from './../Utils'

const renderDescriptor = descriptors => {
  const keys = Object.keys(descriptors)

return keys.map(key => <Utils.Text>{key}</Utils.Text> )
}

export const Sidebar = (props) => {
  const { descriptors } = props

  return (
    <Utils.View>
      {renderDescriptor(descriptors)}
    </Utils.View>
)}

export default Sidebar