import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import SignupStepper from "./pages/provider_signup/SignupStepper";
import BrowseRequests from "./pages/browse_requests/BrowseRequests";
import VolunteerSignupPlaceholder from "./pages/VolunteerSignupPlaceholder";
import ProviderPage from "./pages/ProviderPage";
import OfferForm from "./pages/volunteer_signup/OfferForm";
import Container from "@material-ui/core/Container";
import VolunteerAddressForm from "./pages/volunteer_signup/VolunteerAddressForm";
import VolunteerStepper from "./pages/volunteer_signup/VolunteerStepper";
import EditProvider from "./pages/edit_provider/EditProvider";
import Header from "./components/Header";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import theme from "./theme";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import HowItWorks from "./pages/HowItWorksPage";
import VolunteerConfirmation from "./pages/VolunteerConfirmation";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "100%",
    overflowX: "hidden", // @TODO: Figure out where mysterious overflow is coming from
  },
}));

const getCsrfToken = () => {
  const csrf = document.querySelector("meta[name=csrf-token]");
  return csrf ? csrf.getAttribute("content") : "";
};

const client = new ApolloClient({
  request: (operation) => {
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
                  <Container maxWidth="md">
                    <ScrollToTopOnMount />
                    <SignupStepper />
                  </Container>
                </Route>
                <Route
                  path="/volunteer-signup"
                  render={(props) => (
                    <>
                      <Container maxWidth="md">
                        <ScrollToTopOnMount />
                        <VolunteerStepper
                          {...props}
                          steps={[
                            { label: "Offer Help", component: OfferForm },
                            {
                              label: "About You",
                              component: VolunteerAddressForm,
                            },
                          ]}
                        />
                      </Container>
                    </>
                  )}
                />
                <Route path="/volunteer/confirmation">
                  <ScrollToTopOnMount />
                  <VolunteerConfirmation />
                </Route>
                <Route path="/volunteer/signup">
                  <Container maxWidth="md">
                    <ScrollToTopOnMount />
                    <VolunteerSignupPlaceholder />
                  </Container>
                </Route>
                <Route path="/volunteer">
                  <Container maxWidth="md">
                    <ScrollToTopOnMount />
                    <BrowseRequests />
                  </Container>
                </Route>
                <Route path="/providers/:token/edit">
                  <Container maxWidth="md">
                    <EditProvider />
                  </Container>
                </Route>
                <Route path="/providers/:id" component={ProviderPage} />
                <Route path="/how-it-works">
                  <ScrollToTopOnMount />
                  <HowItWorks />
                </Route>
                <Route path="/">
                  <ScrollToTopOnMount />
                  <Home />
                </Route>
              </Switch>
            </div>
          </main>
          <Footer />
        </Router>
      </ApolloProvider>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
