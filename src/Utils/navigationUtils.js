import React from 'react'
import { createStackNavigator  } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import { Drawer } from './draweUtils'

const AppNavigator = createStackNavigator(
  {
    Drawer : { screen: Drawer },
  },
  {
    initialRouteName: "Drawer",
    headerMode: 'none',
  }
)

export const AppContainer = createAppContainer(AppNavigator);