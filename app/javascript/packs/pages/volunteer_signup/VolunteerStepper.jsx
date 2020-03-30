import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";
import Snackbar from "@material-ui/core/Snackbar";
import queryString from "query-string";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(10),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(5, 0, 3),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fill: theme.palette.error.contrastText,
    padding: theme.spacing(1),
  },
  step: {
    cursor: "pointer",
  },
  heading: {
    margin: theme.spacing(2),
  },
  details: {
    fontWeight: 100,
    fontSize: "1rem",
  },
}));

const CREATE_VOLUNTEER = gql`
  mutation CreateVolunteer(
    $firstName: String!
    $lastName: String
    $neighborhood: String
    $city: String!
    $state: String!
    $email: String!
    $providerId: ID!
    $requests: [String!]!
    $description: String
    $availabilities: [String!]!
    $phone: String
    $social: String
    $over18: Boolean!
  ) {
    createVolunteer(
      input: {
        firstName: $firstName
        lastName: $lastName
        neighborhood: $neighborhood
        city: $city
        state: $state
        email: $email
        providerId: $providerId
        requests: $requests
        description: $description
        availabilities: $availabilities
        phone: $phone
        social: $social
        over18: $over18
      }
    ) {
      errors
      volunteer {
        id
        firstName
        responses {
          provider {
            id
          }
          requests
          availabilities
        }
      }
    }
  }
`;

const GET_PROVIDER = gql`
  query Provider($id: ID!) {
    provider(id: $id) {
      id
      firstName
      requests {
        type
        satisfied
      }
    }
  }
`;

export default function VolunteerStepper({ steps, location }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = React.useState(null);
  const [variables, setVariables] = React.useState({
    firstName: "",
    lastName: "",
    neighborhood: "",
    city: "",
    state: "",
    email: "",
    requests: [],
    description: "",
    availabilities: [],
    phone: "",
    social: "",
    over18: false,
  });

  const queryId = queryString.parse(location.search).provider;
  let provider;

  const providerResult = useQuery(GET_PROVIDER, {
    variables: { id: parseInt(queryId) },
  });

  if (providerResult && providerResult.data && providerResult.data.provider) {
    provider = providerResult.data.provider;
  }

  const [createVolunteer, { loading, data, error }] = useMutation(
    CREATE_VOLUNTEER
  );

  const handleNext = () => {
    if (activeStep === steps.length - 1 && variables.over18 === false) {
      setErrors(["You must be over 18 years old to volunteer."]);
    } else if (activeStep === steps.length - 1) {
      createVolunteer({
        variables: { ...variables, providerId: parseInt(queryId) },
      })
        .then(({ errors: systemErrors = [], data }) => {
          const {
            createVolunteer: { volunteer, errors = [] },
          } = data;
          const allErrors = [...(errors || []), ...systemErrors].map((e) =>
            e && e.message ? e.message : e
          );
          if (errors.length) {
            setErrors(errors);
          } else {
            setActiveStep(activeStep + 1);
          }
        })
        .catch((e) => {
          setErrors([e.message]);
        });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const setField = (name) => (value) => {
    setVariables({ ...variables, [name]: value });
  };

  const onChange = (e) => setField(e.target.name)(e.target.value);

  const CurrentStep = steps[activeStep] && steps[activeStep].component;

  if (activeStep === steps.length) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Thank you so much for volunteering!
        </Typography>
        <Typography variant="subtitle1">
          You should hear back from the medical provider soon.
        </Typography>
      </Paper>
    );
  }

  if (!provider) return null;

  return (
    <Paper className={classes.paper}>
      <React.Fragment>
        <Typography
          component="h1"
          variant="h6"
          align="center"
          style={{ fontWeight: 100 }}
        >
          Offer Help
        </Typography>
        <Typography
          component="h2"
          variant="h5"
          align="center"
          className={classes.heading}
        >
          {`Respond to ${provider.firstName}'s request`}
        </Typography>
        <Typography
          component="h3"
          variant="h6"
          align="center"
          className={classes.details}
        >
          {`Your offer to help will be emailed to ${provider.firstName} and they will respond if they still need help. Thank you for volunteering!`}
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(({ label }, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepLabel className={classes.step}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          <React.Fragment>
            <CurrentStep
              onChange={onChange}
              setField={setField}
              provider={provider}
              {...variables}
            />
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                disabled={loading}
              >
                {activeStep === steps.length - 1 ? "Volunteer" : "Next"}
              </Button>
            </div>
          </React.Fragment>
        </React.Fragment>
      </React.Fragment>
      {errors && (
        <Snackbar open={true} onClose={() => setErrors(null)}>
          <Paper className={classes.error}>
            <ErrorIcon /> {errors.join(" - ")}
          </Paper>
        </Snackbar>
      )}
    </Paper>
  );
}

VolunteerStepper.propTypes = {
  steps: PropTypes.array,
};
