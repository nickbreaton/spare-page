import React, { Component } from 'react'
import Center from './Center'
import Loading from './Loading'
import Upload from './Upload'

class Status extends Component {
  renderActive() {
    if (this.props.loading) {
      return (
        <Loading>loading</Loading>
      )
    } else {
      return (
        <Upload className={this.props.fileOver ? 'active' : ''}/>
      )
    }
  }
  render() {
    return (
      <Center>
        {this.renderActive()}
      </Center>
    )
  }
}

export default Status
