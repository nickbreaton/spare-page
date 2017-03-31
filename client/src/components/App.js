import Card from './Card';
import Drop from './Drop'
import FileManager from './FileManager'
import React from 'react'
import Store from './Store'
import Styles from './Styles'

const App = () => (
  <Store>
    <Styles>
        <Card>
          <Drop/>
          <FileManager/>
        </Card>
    </Styles>
  </Store>
)

export default App
