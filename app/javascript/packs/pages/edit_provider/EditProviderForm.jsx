import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import STATES from "../../data/states";
import providerRequestTypes from "../../data/providerRequestTypes";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import { TOKEN_ENTITY_REQUEST_STATES } from "../../hooks/useTokenEntity";
import StyledFormLabel from "../../components/forms/StyledFormLabel";
import StyledTextField from "../../components/forms/StyledTextField";
import StyledInputLabel from "../../components/forms/StyledInputLabel";

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  mediumSpacing: {
    marginBottom: "30px",
  },
  removeInfo: {
    color: theme.palette.text.paperContrast,
    fontSize: "14px",
    marginBottom: "50px",
  },
  formLabel: {
    paddingBottom: "24px",
    fontWeight: 500,
  },
}));

const EditProviderForm = ({
  provider,
  onChange,
  setField,
  requestState,
  saveProvider,
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.removeInfo} align="center">
        (To remove your request, turn off the 'Published' switch below and then
        click the 'Update My Request' button at the bottom of the page.)
      </Typography>
      <Grid item xs={12} className={classes.mediumSpacing}>
        <FormControl>
          <StyledFormLabel required id="type-select-label">
            Request visibility
          </StyledFormLabel>
          <FormControlLabel
            control={
              <Switch
                checked={provider.active}
                onChange={(e) => {
                  setField("active")(e.target.checked);
                }}
                name="active"
                color="primary"
              />
            }
            label={provider.active ? "Published" : "Unpublished"}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} className={classes.mediumSpacing}>
        <FormControl>
          <StyledFormLabel
            required
            id="type-select-label"
            className={classes.formLabel}
          >
            What kinds of support do you need?
          </StyledFormLabel>
          {providerRequestTypes.map((type) => (
            <FormControlLabel
              key={type.value}
              control={
                <Checkbox
                  checked={provider.requests.includes(type.value)}
                  onChange={(e) =>
                    e.target.checked
                      ? setField("requests")([...provider.requests, type.value])
                      : setField("requests")(
                          provider.requests.filter((x) => x !== type.value)
                        )
                  }
                  name={type.value}
                  color="primary"
                />
              }
              label={type.label}
            />
          ))}
        </FormControl>
      </Grid>
      <Grid item xs={12} className={classes.mediumSpacing}>
        <StyledTextField
          required
          multiline
          variant="outlined"
          id="description"
          name="description"
          label="Describe your request"
          fullWidth
          value={provider.description}
          onChange={onChange}
        />
        <FormHelperText>
          If possible, please include details such as days or times of week you
          anticipate needing help, dietary restrictions, and anything else a
          helper might need to know.
        </FormHelperText>
      </Grid>

      <Typography variant="h6" className={classes.mediumSpacing}>
        About You
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={provider.firstName}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            id="lastName"
            name="lastName"
            label="Last name"
            value={provider.lastName}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            id="neighborhood"
            name="neighborhood"
            label="Neighborhood"
            value={provider.neighborhood}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            required
            id="city"
            name="city"
            label="City"
            value={provider.city}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <StyledInputLabel required id="state">
              State
            </StyledInputLabel>
            <Select
              required
              native
              labelId="state"
              id="state"
              name="state"
              className={classes.stateSelect}
              onChange={onChange}
              value={provider.state}
            >
              <option value="" />
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            required
            id="facility"
            name="facility"
            label="Your Medical Facility"
            value={provider.facility}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <StyledInputLabel required id="role-select-label">
              Your Job Title / Role
            </StyledInputLabel>
            <Select
              required
              native
              labelId="role-select-label"
              id="role"
              name="role"
              className={classes.roleSelect}
              value={provider.role}
              onChange={onChange}
            >
              <option value="" />
              <option value="physician">Doctor, NP, PA</option>
              <option value="nurse">Nurse</option>
              <option value="therapist">RT, PT, OT, ST, Nutrition</option>
              <option value="paramedic">EMT / paramedic</option>
              <option value="assistant">Patient care assistant, MA</option>
              <option value="social">Social Worker, Chaplain</option>
              <option value="admin">Admin/support staff</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            required
            id="email"
            name="email"
            label="Email"
            value={provider.email}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() => {
              saveProvider(provider);
            }}
            disabled={requestState === TOKEN_ENTITY_REQUEST_STATES.SAVING}
          >
            Update my request
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default EditProviderForm;
