import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import {AccountCircle} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import SignupStepper from "./pages/provider_signup/SignupStepper";
import AddressForm from "./pages/provider_signup/AddressForm";
import ProviderRequestForm from "./pages/provider_signup/ProviderRequestForm";
import BrowseRequests from "./pages/BrowseRequests";
import ProviderPage from './pages/ProviderPage';
import OfferForm from "./pages/volunteer_signup/OfferForm";
import VolunteerAddressForm from "./pages/volunteer_signup/VolunteerAddressForm";
import VolunteerStepper from "./pages/volunteer_signup/VolunteerStepper";
import EditProvider from "./pages/edit_provider/EditProvider";
import VolunteerSignupPlaceholder from "./pages/VolunteerSignupPlaceholder";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    position: "relative",
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    marginBottom: theme.spacing(3),
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  headerLink: {
    textDecoration: 'none'
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a color="inherit" href="https://www.feedadoc.com">
        FeedADoc.com
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getCsrfToken = () => {
    const csrf = document.querySelector('meta[name=csrf-token]');
    return csrf ? csrf.getAttribute('content') : '';
  }

  const client = new ApolloClient({
    request: (operation) => {
      operation.setContext({
        headers: {
          X_CSRF_TOKEN: getCsrfToken(),
        }
      })
    }
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <CssBaseline />

        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.title}>
              <Link to="/" className={classes.headerLink}>
                FeedADoc.com
              </Link>
            </Typography>
            {false && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <div className={classes.main}>
            <Switch>
              <Route path="/provider-signup">
                <SignupStepper steps={[
                  { label: 'About You', component: AddressForm },
                  { label: 'Request', component: ProviderRequestForm },
                ]}/>
              </Route>
              <Route path="/volunteer-form">
                {/*This is here until we have a directory to browse.*/}
                <VolunteerSignupPlaceholder />
              </Route>
              <Route
                path="/volunteer-signup"
                render={(props) => (
                  <VolunteerStepper {...props} steps={[
                    { label: 'Offer Help', component: OfferForm },
                    { label: 'About You', component: VolunteerAddressForm },
                  ]}/>
                )}
              />
              <Route path="/volunteer-signup">
                <BrowseRequests />
              </Route>
              <Route path="/providers/:token/edit">
                <EditProvider />
              </Route>
              <Route path="/providers/:id" component={ProviderPage}/>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </div>

          <Copyright />
        </main>
      </Router>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
