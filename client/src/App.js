import Content from './Content'
import Drop from './Drop'
import Footer from './Footer'
import Header from './Header'
import Page from './Page'
import React from 'react'
import Title from './Title'

const App = () => (
  <Page>
    <Header>
      <Title>SparePage</Title>
    </Header>
    <Content>
      <Drop/>
    </Content>
    <Footer/>
  </Page>
)

export default App
