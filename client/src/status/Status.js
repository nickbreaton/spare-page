import Center from './Center'
import React, { Component } from 'react'
import Upload from './Upload'
import Pending from './Pending'

class Status extends Component {
  render() {
    return (
      <Center>
        <Upload/>
        <Pending/>
      </Center>
    )
  }
}

export default Status
