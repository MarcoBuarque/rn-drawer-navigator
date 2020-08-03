import React, { useEffect, useState } from 'react'

import { SectionButton } from './elements'
import * as Utils from './../Utils'

const routeImage = {
  Mussum: require('./../../Assets/mussum.jpeg'),
  CompadreWashington: require('./../../Assets/compadreW.jpeg'),
  SilvioSantos: require('./../../Assets/silvioSantos.jpg')
}

export const Sidebar = (props) => {
  const [sectionTitle, setSectionTitle] = useState([])

  useEffect(() => {
    const { descriptors } = props
    setSectionTitle(Object.keys(descriptors))
  }, [props])

  const onPress = ({ routeName }) => { // TODO: Use callBack
    props.navigation.navigate(routeName) // O navigation é da própria stack
  }

  return (
    <Utils.View>
      {sectionTitle.map((routeName, index) => <SectionButton key={`${index}-${routeName}`} title={routeName} onPress={onPress} image={routeImage[routeName]} />)}
    </Utils.View>
)}

export default Sidebar