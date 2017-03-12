import Content from './Content'
import FileDrop from './FileDrop'
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
      <FileDrop/>
    </Content>
    <Footer/>
  </Page>
)

export default App
