import Content from './Content'
import FileDrop from './FileDrop'
import Footer from './Footer'
import Header from './Header'
import Page from './Page'
import React from 'react'
import Title from './Title'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={{ color: '#AED581' }}>
    <Page>
      <Header>
        <Title>SparePage</Title>
      </Header>
      <Content>
        <FileDrop/>
      </Content>
      <Footer/>
    </Page>
  </ThemeProvider>
)

export default App
