import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import SignupStepper from './pages/provider_signup/SignupStepper';
import AddressForm from './pages/provider_signup/AddressForm';
import ProviderRequestForm from './pages/provider_signup/ProviderRequestForm';
import BrowseRequests from './pages/BrowseRequests';
import ProviderPage from './pages/ProviderPage';
import OfferForm from './pages/volunteer_signup/OfferForm';
import VolunteerAddressForm from './pages/volunteer_signup/VolunteerAddressForm';
import VolunteerStepper from './pages/volunteer_signup/VolunteerStepper';
import EditProvider from './pages/edit_provider/EditProvider';
import Header from './components/Header';
import theme from './theme';
import Home from './pages/home/Home';

const useStyles = makeStyles(theme => ({
  layout: {
    width: '100%',
    overflowX: 'hidden' // @TODO: Figure out where mysterious overflow is coming from
  },
}));

const getCsrfToken = () => {
  const csrf = document.querySelector('meta[name=csrf-token]');
  return csrf ? csrf.getAttribute('content') : '';
};

const client = new ApolloClient({
  request: operation => {
    operation.setContext({
      headers: {
        X_CSRF_TOKEN: getCsrfToken(),
      },
    });
  },
});

function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <CssBaseline />
          <Header />
          <main className={classes.layout}>
            <div className={classes.main}>
              <Switch>
                <Route path="/provider-signup">
                  <SignupStepper
                    steps={[
                      {label: 'About You', component: AddressForm},
                      {label: 'Request', component: ProviderRequestForm},
                    ]}
                  />
                </Route>
                <Route
                  path="/volunteer-signup"
                  render={props => (
                    <VolunteerStepper
                      {...props}
                      steps={[
                        {label: 'Offer Help', component: OfferForm},
                        {label: 'About You', component: VolunteerAddressForm},
                      ]}
                    />
                  )}
                />
                <Route path="/volunteer-signup">
                  <BrowseRequests />
                </Route>
                <Route path="/providers/:token/edit">
                  <EditProvider />
                </Route>
                <Route path="/providers/:id" component={ProviderPage} />
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </main>
        </Router>
      </ApolloProvider>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
