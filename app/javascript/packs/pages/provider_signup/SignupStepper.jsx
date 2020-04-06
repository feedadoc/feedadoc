import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import AddressForm from "./AddressForm";
import ProviderRequestForm from "./ProviderRequestForm";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CREATE_PROVIDER } from "../../queries/createProvider";
import { useMutation } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";
import Snackbar from "@material-ui/core/Snackbar";

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
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    "&:hover": {
      textDecoration: "underline",
    },
  },
  details: {
    fontWeight: 100,
    fontSize: "1rem",
    marginTop: theme.spacing(1),
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
}));

const steps = [
  { label: "Request", component: ProviderRequestForm },
  { label: "About You", component: AddressForm },
];

export default function SignupStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState(null);
  const [variables, setVariables] = useState({
    firstName: "",
    lastName: "",
    neighborhood: "",
    city: "",
    state: "",
    email: "",
    facility: "",
    country: "",
    role: "",
    requests: [],
    description: "",
    address: "",
  });
  const [mapResult, setMapResult] = useState(null);
  const [redirectId, setRedirectId] = useState();
  const [editLink, setEditLink] = useState();

  const [createProvider, { loading, data, error }] = useMutation(
    CREATE_PROVIDER
  );

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      createProvider({ variables })
        .then(({ errors: systemErrors = [], data }) => {
          const {
            createProvider: { provider, editLink, errors = [] },
          } = data;
          const allErrors = [...(errors || []), ...systemErrors].map((e) =>
            e && e.message ? e.message : e
          );
          if (errors.length) {
            setErrors(errors);
          } else {
            setEditLink(editLink);
            setRedirectId(provider.id);
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
    setVariables((vars) => ({ ...vars, [name]: value }));
  };

  const onChange = (e) => setField(e.target.name)(e.target.value);

  const CurrentStep = steps[activeStep] && steps[activeStep].component;

  if (redirectId) {
    return (
      <Redirect
        push
        to={{
          pathname: `/providers/${redirectId}`,
          state: {
            providerCreation: true,
            editLink: editLink,
          },
        }}
      />
    );
  }

  return (
    <Paper className={classes.paper}>
      <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
          Post a Request
        </Typography>
        <Typography
          component="h3"
          variant="h6"
          align="center"
          className={classes.details}
        >
          {`Your first name, city, role, and facility (optional) will be visible on our volunteer page. We will never publish your email address, last name, or exact location.`}
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
              setMapResult={setMapResult}
              mapResult={mapResult}
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
                {activeStep === steps.length - 1 ? "Save" : "Next"}
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

SignupStepper.propTypes = {
  steps: PropTypes.array,
};
