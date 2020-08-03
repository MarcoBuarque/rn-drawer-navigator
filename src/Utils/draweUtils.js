import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Sidebar from './../Components/Sidebar'

import Mussum from './../Pages/Mussum'
import CompadreWashington from './../Pages/CompadreWashington'
import SilvioSantos from '../Pages/SilvioSantos'

export const Drawer = createDrawerNavigator(
  {
    Mussum:{ screen: Mussum },
    CompadreWashington:{ screen: CompadreWashington },
    SilvioSantos:{ screen: SilvioSantos },
    Hollywood: { screen: SilvioSantos }
  },
  {
    initialRouteName: 'Mussum',
    unmountInactiveRoutes: true,
    backBehavior: 'order',
    drawerType: 'permanent',
    contentComponent: props => <Sidebar {...props} />
  }
) 

// https://reactnativemaster.com/react-native-drawer-tutorial/
// https://reactnativemaster.com/react-native-screen-transitions/