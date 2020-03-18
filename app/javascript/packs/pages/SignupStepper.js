import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
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
    cursor: 'pointer',
  }
}));

const CREATE_PROVIDER = gql`
  mutation CreateProvider($firstName: String!, $lastName: String,
                          $neighborhood: String, $city: String!, $state: String!,
                          $email: String!, $contactInfo: String!,
                          $facility: String!, $role: String!,
                          $requestType: String!, $requestDescription: String!) {
    createProviderAndRequest(input: {
                                      firstName: $firstName,
                                      lastName: $lastName,
                                      neighborhood: $neighborhood, city: $city, state: $state,
                                      email: $email, contactInfo: $contactInfo,
                                      facility: $facility, role: $role,
                                      requestType: $requestType, requestDescription: $requestDescription
                                    }) {
      errors
      provider { id }
      request { id }
    }
  }
`;

export default function SignupStepper({ steps }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = React.useState(null);
  const [variables, setVariables] = React.useState({
    firstName: '',
    lastName: '',
    neighborhood: '',
    city: '',
    state: '',
    email: '',
    contactInfo: '',
    facility: '',
    role: '',
    requestType: '',
    requestDescription: ''
  });

  const [createProvider, { loading, data, error }] = useMutation(CREATE_PROVIDER);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      createProvider({ variables }).then(({ errors: systemErrors = [], data }) => {
        const { createProviderAndRequest: { provider, request, errors = [] } } = data;
        const allErrors = [...(errors || []), ...systemErrors].map(e => e && e.message ? e.message : e);
        if (errors.length) {
          setErrors(errors);
        } else {
          setActiveStep(activeStep + 1);
        }
        console.log(data);
        console.log([provider, request]);
      }).catch((e) => {
        setErrors([e.message]);
      });
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onChange = (e) => {
    setVariables({...variables, [e.target.name]: e.target.value});
  };

  const CurrentStep = steps[activeStep] && steps[activeStep].component;

  if (activeStep === steps.length) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Thank you for signing up.
        </Typography>
        <Typography variant="subtitle1">
          We have emailed you your account information.
        </Typography>
      </Paper>
    );
  }

  if (loading) {
    return (
      <Paper className={classes.paper}>
        <Typography>Just a moment...</Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
          Signup
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(({label}, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepLabel className={classes.step}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          <React.Fragment>
            <CurrentStep onChange={onChange} {...variables} />
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
              >
                {activeStep === steps.length - 1 ? 'Signup' : 'Next'}
              </Button>
            </div>
          </React.Fragment>
        </React.Fragment>
      </React.Fragment>
      {errors &&
        <Snackbar open={true} onClose={() => setErrors(null)}>
          <Paper className={classes.error}>
            <ErrorIcon />{' '}{errors.join(" - ")}
          </Paper>
        </Snackbar>
      }
    </Paper>
  );
}

SignupStepper.propTypes = {
  steps: PropTypes.array
};
