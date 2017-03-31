import CloseIcon from '../../assets/icons/close.svg'
import DownloadIcon from '../../assets/icons/arrow_down.svg'
import FileButtons from './FileButtons'
import FileText from './FileText'
import FileWrapper from './FileWrapper'
import React, { Component } from 'react'
import Spinner from './Spinner'
import styled from 'styled-components'

class File extends Component {
  render() {
    return (
      <FileWrapper>
        <Spinner {...this.props}/>
        <FileText>
          {this.props.name}
        </FileText>
        <FileButtons complete={this.props.complete}>
          <DownloadIcon/>
          <CloseIcon/>
        </FileButtons>
      </FileWrapper>
    )
  }
}

export default File
