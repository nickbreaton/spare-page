import Card from './Card';
import DropContainer from './DropContainer'
import DummyDrop from './DummyDrop';
import ErrorDialog from './ErrorDialog'
import FileManager from './FileManager'
import Footer from './Footer';
import Header from './Header';
import Main from './Main'
import React from 'react'
import Store from './Store'
import Styles from './Styles'

const App = () => (
  <Store>
    <Styles>
      <DummyDrop/>
      <Main>
        <Header/>
        <Card>
          <ErrorDialog/>
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
