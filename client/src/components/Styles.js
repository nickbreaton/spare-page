import React, { Component } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'

class Styles extends Component {
  theme = {
    colors: {
      accent: '#BAD3F7',
      error: '#E74C3C',
      main: '#3A7CF3'
    }
  }
  componentWillMount() {
    injectGlobal`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        background-color: ${this.theme.colors.accent};
        font-family: 'Varela Round';
      }
    `
  }
  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <div>
          {this.props.children}
        </div>
      </ThemeProvider>
    )
  }
}

export default Styles
