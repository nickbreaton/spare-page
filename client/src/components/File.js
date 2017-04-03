import FileButton from './FileButton'
import FileButtons from './FileButtons'
import FileText from './FileText'
import FileWrapper from './FileWrapper'
import React, { Component } from 'react'
import Spinner from './Spinner'
import styled from 'styled-components'

class File extends Component {
  render() {
    return (
      <FileWrapper error={this.props.error}>
        <Spinner {...this.props}/>
        <FileText>
          {this.props.name}
        </FileText>
        <FileButtons complete={this.props.complete}>
          <FileButton download active={this.props.complete} onClick={this.props.download}/>
          <FileButton close active onClick={this.props.remove}/>
        </FileButtons>
      </FileWrapper>
    )
  }
}

export default File
