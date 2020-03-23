import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorIcon from "@material-ui/icons/Error";
import Snackbar from "@material-ui/core/Snackbar";
import EditProviderForm from './EditProviderForm';
import green from '@material-ui/core/colors/green'
import useTokenEntity, {
  TOKEN_ENTITY_REQUEST_STATES
} from "../../hooks/useTokenEntity";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fill: theme.palette.error.contrastText,
    padding: theme.spacing(1)
  },
  success: {
    backgroundColor: green[100],
    color: green[900],
    fill: green[900],
    padding: theme.spacing(1)
  },
  firstEntry: {
    marginTop: theme.spacing(2)
  },
  typeSelect: {
    minWidth: 200
  },
  mediumSpacing: {
    marginBottom: "30px"
  },
  largeSpacing: {
    marginBottom: "50px"
  }
}));

const EditProvider = () => {
  const { token } = useParams();
  const [
    requestState,
    provider,
    error,
    setField,
    saveProvider,
    isSaveSnackbarOpen,
    acknowledgeSaveSnackbar
  ] = useTokenEntity(token, "Provider");
  const classes = useStyles();
  const onChange = e => {
    setField(e.target.name)(e.target.value);
  };
  
  return (
    <Paper className={classes.paper}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="textPrimary"
        className={classes.largeSpacing}
      >
        Update your request
      </Typography>

      {requestState === TOKEN_ENTITY_REQUEST_STATES.LOADING ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {
            provider ? (
              <EditProviderForm requestState={requestState} saveProvider={saveProvider} provider={provider} onChange={onChange} setField={setField}  />
            ) : `We had some trouble loading your information. Verify you have the correct link and try again.`
          }
        </>
      ) }
      {requestState === TOKEN_ENTITY_REQUEST_STATES.SAVING_SUCCESS && (
        <Snackbar autoHideDuration={1500} open={isSaveSnackbarOpen} onClose={acknowledgeSaveSnackbar}>
          <Paper className={classes.success}>
            <ErrorIcon /> Your request has been updated
          </Paper>
        </Snackbar>
      )}
      {requestState === TOKEN_ENTITY_REQUEST_STATES.SAVING_ERROR && (
        <Snackbar open={true}>
          <Paper className={classes.error}>
            <ErrorIcon /> {error}
          </Paper>
        </Snackbar>
      )}
    </Paper>
  );
};

export default EditProvider;
