import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import * as Utils from './../Utils'

export const Sidebar = (props) => {
  const [sectionTitle, setSectionTitle] = useState([])

  useEffect(() => {
    const { descriptors } = props
    setSectionTitle(Object.keys(descriptors))
  }, [props])

  return (
    <Utils.View>
      {sectionTitle.map(key => <Utils.Text>{key}</Utils.Text>)}
    </Utils.View>
)}

export default Sidebar