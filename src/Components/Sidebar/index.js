import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { SectionButton } from './elements'
import * as Utils from './../Utils'

export const Sidebar = (props) => {
  const [sectionTitle, setSectionTitle] = useState([])

  useEffect(() => {
    const { descriptors } = props
    setSectionTitle(Object.keys(descriptors))
  }, [props])

  return (
    <Utils.View>
      {sectionTitle.map(key => <SectionButton title={key} />)}
    </Utils.View>
)}

export default Sidebar