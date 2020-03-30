import "@testing-library/jest-dom";

jest.mock("popper.js", () => {
  const PopperJS = jest.requireActual("popper.js");

  return class {
    static placements = PopperJS.placements;

    constructor() {
      return {
        destroy: () => {},
        update: () => {},
        scheduleUpdate: () => {},
      };
    }
  };
});

/*** Mock Google Maps JavaScript API ***/
const google = {
  maps: {
    places: {
      AutocompleteService: class Service {
        getPlacePredictions(input, callback) {
          callback([
            {
              description: "Denver, CO, USA",
              id: "464b513e4fd9a3c7c3bd63d091ecc856aff12e2c",
              matched_substrings: [
                {
                  length: 6,
                  offset: 0,
                },
              ],
              place_id: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
              reference: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
              structured_formatting: {
                main_text: "Denver",
                main_text_matched_substrings: [
                  {
                    length: 6,
                    offset: 0,
                  },
                ],
                secondary_text: "CO, USA",
              },
              terms: [
                {
                  offset: 0,
                  value: "Denver",
                },
                {
                  offset: 8,
                  value: "CO",
                },
                {
                  offset: 12,
                  value: "USA",
                },
              ],
              types: ["locality", "political", "geocode"],
            },
          ]);
        }
      },
      AutocompleteSessionToken: class Token {},
      PlacesServiceStatus: {
        INVALID_REQUEST: "INVALID_REQUEST",
        NOT_FOUND: "NOT_FOUND",
        OK: "OK",
        OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
        REQUEST_DENIED: "REQUEST_DENIED",
        UNKNOWN_ERROR: "UNKNOWN_ERROR",
        ZERO_RESULTS: "ZERO_RESULTS",
      },
    },
    Geocoder: class {
      geocode(x, callback) {
        callback(
          [
            {
              address_components: [
                {
                  long_name: "Denver",
                  short_name: "Denver",
                  types: ["locality", "political"],
                },
                {
                  long_name: "Denver County",
                  short_name: "Denver County",
                  types: ["administrative_area_level_2", "political"],
                },
                {
                  long_name: "Colorado",
                  short_name: "CO",
                  types: ["administrative_area_level_1", "political"],
                },
                {
                  long_name: "United States",
                  short_name: "US",
                  types: ["country", "political"],
                },
              ],
              formatted_address: "Denver, CO, USA",
              geometry: {
                bounds: {
                  Za: {
                    i: 39.614431,
                    j: 39.91424689999999,
                  },
                  Ua: {
                    i: -105.109927,
                    j: -104.6002959,
                  },
                },
                location: {},
                location_type: "APPROXIMATE",
                viewport: {
                  Za: {
                    i: 39.614431,
                    j: 39.91424689999999,
                  },
                  Ua: {
                    i: -105.109927,
                    j: -104.6002959,
                  },
                },
              },
              place_id: "ChIJzxcfI6qAa4cR1jaKJ_j0jhE",
              types: ["locality", "political"],
            },
          ],
          "OK"
        );
      }
    },
    GeocoderStatus: {
      ERROR: "ERROR",
      INVALID_REQUEST: "INVALID_REQUEST",
      OK: "OK",
      OVER_QUERY_LIMIT: "OVER_QUERY_LIMIT",
      REQUEST_DENIED: "REQUEST_DENIED",
      UNKNOWN_ERROR: "UNKNOWN_ERROR",
      ZERO_RESULTS: "ZERO_RESULTS",
    },
  },
};
global.window.google = google;
