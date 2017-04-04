import Card from './Card';
import DropContainer from './DropContainer'
import DummyDrop from './DummyDrop';
import ErrorDialog from './ErrorDialog'
import FileManager from './FileManager'
import Footer from './Footer';
import React from 'react'
import Store from './Store'
import Styles from './Styles'
import Main from './Main'

const App = () => (
  <Store>
    <Styles>
      <DummyDrop/>
      <ErrorDialog/>
      <Main>
        <Card>
          <DummyDrop/>
          <DropContainer/>
          <FileManager/>
        </Card>
        <Footer/>
      </Main>
    </Styles>
  </Store>
)

export default App
