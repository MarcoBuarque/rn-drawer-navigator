import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Sidebar from './../Components/Sidebar'

import Home from './../Pages/Home'
import About from './../Pages/About'

export const Drawer = createDrawerNavigator(
  {
    Home:{ screen: Home },
    About:{ screen: About }

  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    // headerMode: "none",
    contentComponent: props => <Sidebar />
  }
) 

// https://reactnativemaster.com/react-native-drawer-tutorial/
// https://reactnativemaster.com/react-native-screen-transitions/