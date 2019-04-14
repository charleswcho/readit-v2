import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './App.css';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Readit</Typography>
          </Toolbar>
        </AppBar>

        <Typography component="h2" variant="h1" gutterBottom>
          Hi there
        </Typography>

        <Button variant="contained" color="primary">
          Hello World
        </Button>

        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Tabs centered value={value} onChange={this.handleChange}>
            <Tab label="Top" />
            <Tab label="Popular" />
            <Tab label="Hot" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);
