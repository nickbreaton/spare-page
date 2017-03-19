import { Provider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'
import Content from './Content'
import FileDrop from './FileDrop'
import Footer from './Footer'
import Header from './Header'
import Page from './Page'
import React from 'react'
import stores from './stores'
import Title from './Title'
import Status from './status/Status'

const App = () => (
  <ThemeProvider theme={{ color: '#AED581' }}>
    <Provider {...stores}>
      <Page>
        <Header>
          <Title>SparePage</Title>
        </Header>
        <Content>
          <FileDrop>
            <Status/>
          </FileDrop>
        </Content>
        <Footer/>
      </Page>
    </Provider>
  </ThemeProvider>
)

export default App
