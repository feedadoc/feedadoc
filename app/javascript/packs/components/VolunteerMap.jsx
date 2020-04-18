import React from "react";
import GoogleMapReact from "google-map-react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import MapMarker from "./icons/MapMarker";
import useWindowSize from "../hooks/useWindowSize";
import mapStyles from "../helpers/mapStyles";
import volunteerLocations from "../helpers/volunteerLocations";

const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    paddingBottom: "70%",
    "@media (min-width:980px)": {
      paddingBottom: "50%",
    },
    "@media (min-width:1280px)": {
      paddingBottom: "35%",
    },
    position: "relative",
    "& > *": {
      position: "absolute !important",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
    },
  },
}));

const mapOptions = {
  styles: mapStyles,
  gestureHandling: "cooperative",
  zoomControl: false,
};

const getZoomByWindowWidth = (windowWidth) => {
  switch (true) {
    case windowWidth > 1200: {
      return 4.6;
    }
    case windowWidth > 700: {
      return 4.2;
    }
    default: {
      return 3.3;
    }
  }
};

const VolunteerMap = ({ center }) => {
  const classes = useStyles();
  const [windowWidth] = useWindowSize();
  return (
    <Box width="100%" className={classes.mapWrapper}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC91p5MR0B-sProwqXqStywWfAXOxOkcm8" }}
        defaultCenter={center}
        defaultZoom={getZoomByWindowWidth(windowWidth)}
        options={mapOptions}
      >
        {volunteerLocations.map((v) => (
          <MapMarker lng={v.lng} lat={v.lat} />
        ))}
      </GoogleMapReact>
    </Box>
  );
};

VolunteerMap.defaultProps = {
  center: {
    lng: -98.35,
    lat: 39.5,
  },
  zoom: 4.6,
};

export default VolunteerMap;
