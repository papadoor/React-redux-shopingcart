import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HomeContainer from './HomeContainer'

injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <HomeContainer />
        </MuiThemeProvider>
    )
  }
}
