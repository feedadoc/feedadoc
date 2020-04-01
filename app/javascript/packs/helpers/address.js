const ADDRESS_COMPONENTS = {
  locality: "locality",
  administrative_area_level_1: "administrative_area_level_1",
  neighborhood: "neighborhood",
  country: "country",
};

const getAddressComponent = (component) => (address) =>
  address.address_components.find((x) => x.types.includes(component));

export const getAddressLocality = getAddressComponent(
  ADDRESS_COMPONENTS.locality
);

export const getAddressAdministrativeAreaLevel1 = getAddressComponent(
  ADDRESS_COMPONENTS.administrative_area_level_1
);

export const getAddressNeighborhood = getAddressComponent(
  ADDRESS_COMPONENTS.neighborhood
);

export const getAddressCountry = getAddressComponent(
  ADDRESS_COMPONENTS.country
);
