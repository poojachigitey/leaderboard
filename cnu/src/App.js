import React, { Component, PropTypes } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Leaderboard from './app/Modules/Leaderboard/Leaderboard';
import NotFound from './app/Modules/NotFound/NotFound';
// import getMuiTheme from '@material-ui/styles/getMuiTheme';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
// import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { IntlProvider } from 'react-intl';
import messages from './messages';


class App extends Component {

  render() {
    const muiTheme = createMuiTheme({
      palette: {
        primary1Color: '#F0F0F0',
      },
    });
    const routes = (
      <Switch>
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/" component={Leaderboard} />
<Route exact path="/notfound" component={NotFound} />	
	<Route path="*" component={ NotFound} />
      </Switch>);
    return (
      <IntlProvider locale={this.props.lang} messages={messages[this.props.lang]} >
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            {routes}
          </div>
        </MuiThemeProvider>
      </IntlProvider>
    );
  }
}

// App.PropTypes = {
//   lang: PropTypes.String.isRequired,
// }

function mapStateToProps(state) {
  return {
    lang: 'en',
  };
}


function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
