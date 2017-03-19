import Center from './Center'
import React, { Component } from 'react'
import Upload from './Upload'

class Status extends Component {
  render() {
    return (
      <Center>
        <Upload
          hover={this.props.fileOver}
          loading={this.props.loading}
          status={this.props.upload}
        />
      </Center>
    )
  }
}

export default Status
