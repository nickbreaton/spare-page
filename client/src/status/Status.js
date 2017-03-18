import Center from './Center'
import React, { Component } from 'react'
import Upload from './Upload'
import Spinner from './Spinner'

class Status extends Component {
  render() {
    return (
      <Center>
        { this.props.upload != 100 ? <Upload
          hover={this.props.fileOver}
          loading={this.props.loading}
          status={this.props.upload}
        /> : <Spinner/> }
      </Center>
    )
  }
}

export default Status
