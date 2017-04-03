import Card from './Card';
import DropContainer from './DropContainer'
import FileManager from './FileManager'
import React from 'react'
import Store from './Store'
import Styles from './Styles'
import ErrorDialog from './ErrorDialog'

const App = () => (
  <Store>
    <Styles>
      <ErrorDialog/>
      <Card>
        <DropContainer/>
        <FileManager/>
      </Card>
    </Styles>
  </Store>
)

export default App
