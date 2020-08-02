import React, { Component } from 'react'

import { defaultText } from './../../Utils/constants'

import * as Utils from './../../Components/Utils'
import Header from './../../Components/Header'

export class Home extends Component {
  // static propTypes = {}
  // static defaultProps = {}

  // state = {}

  render () {
    return (
      <Utils.Container>
        <Header title='Home' />
        <Utils.View>
          <Utils.Text color='blue'>First Screen</Utils.Text>
          <Utils.Text>{defaultText}</Utils.Text>
        </Utils.View>
      </Utils.Container>
    )
  }
}

export default Home
