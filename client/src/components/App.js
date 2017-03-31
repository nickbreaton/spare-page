import React from 'react'
import Styles from './Styles'
import Card from './Card';
import Drop from './Drop'
import FileManager from './FileManager'

const App = () => (
  <Styles>
    <Card>
      <Drop/>
      <FileManager/>
    </Card>
  </Styles>
)

export default App
