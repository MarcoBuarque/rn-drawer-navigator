import React, { Component } from 'react'

import { defaultText } from '../../Utils/constants'

import * as Utils from '../../Components/Utils'
import Header from '../../Components/Header'

export class Mussum extends Component {
  // static propTypes = {}
  // static defaultProps = {}

  // state = {}

  render () {
    // const { params: { imageName } } = this.props.navigation.state
    console.log('navigation222', this.props.navigation.state.params)
    return (
      <Utils.Container>
        <Header title='Mussum' />
        <Utils.View>
          <Utils.Text color='blue'>{defaultText}</Utils.Text>
        </Utils.View>
      </Utils.Container>
    )
  }
}

export default Mussum
