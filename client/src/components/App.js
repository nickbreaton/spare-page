import Card from './Card';
import DropContainer from './DropContainer'
import DummyDrop from './DummyDrop';
import FileManager from './FileManager'
import React from 'react'
import Store from './Store'
import Styles from './Styles'
import ErrorDialog from './ErrorDialog'

const App = () => (
  <Store>
    <Styles>
      <DummyDrop/>
      <ErrorDialog/>
      <Card>
        <DummyDrop/>
        <DropContainer/>
        <FileManager/>
      </Card>
    </Styles>
  </Store>
)

export default App
