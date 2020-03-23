import { useState } from 'react';
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_ENTITY_BY_TOKEN = gql`
  query getEntity($token: String!) {
    linkedToken(token: $token) {
      ... on FullProvider {
        id
        firstName
        lastName
        neighborhood
        city
        state
        facility
        email
        contactInfo
        role
        description
        requests {
          type
          satisfied
        }
        active
      }
    }
  }
`;

const UPDATE_PROVIDER = gql`
  mutation UpdateProvider(
    $token: String!
    $firstName: String!
    $lastName: String
    $neighborhood: String
    $city: String!
    $state: String!
    $email: String!
    $contactInfo: String!
    $facility: String!
    $role: String!
    $requests: [String!]!
    $description: String!
    $active: Boolean!
  ) {
    updateProvider(
      input: {
        token: $token
        firstName: $firstName
        lastName: $lastName
        neighborhood: $neighborhood
        city: $city
        state: $state
        email: $email
        contactInfo: $contactInfo
        facility: $facility
        role: $role
        requests: $requests
        description: $description
        active: $active
      }
    ) {
      errors
      provider {
        id
        firstName
        lastName
        neighborhood
        city
        state
        facility
        email
        contactInfo
        role
        description
        requests {
          type
          satisfied
        }
        active
      }
    }
  }
`;

const getMutationByEntityType = entityType => {
  switch (entityType) {
    case "Provider":
      return UPDATE_PROVIDER;
    case "Volunteer":
      return undefined;
    default:
      return undefined;
  }
};

const LOADING = 'LOADING';
const LOADED = 'LOADED';
const SAVING = 'SAVING';
const IDLE = 'IDLE';
const LOADING_ERROR = 'LOADING_ERROR';
const SAVING_ERROR = 'SAVING_ERROR';
const SAVING_SUCCESS = 'SAVING_SUCCESS'
export const TOKEN_ENTITY_REQUEST_STATES = {
  LOADING,
  LOADED,
  SAVING,
  IDLE,
  LOADING_ERROR,
  SAVING_ERROR,
  SAVING_SUCCESS,
} 

// (token: string, entityType: 'Provider' | 'Volunteer') => [requestState, entity, error, setField, save, isSaveSnackbarOpen, acknowledgeSaveSnackbar]
const useTokenEntity = (token, entityType) => {
  const entityMutation = getMutationByEntityType(entityType);

  const { error, data } = useQuery(GET_ENTITY_BY_TOKEN, {
    variables: { token }
  });
  const [saveEntity] = useMutation(entityMutation);
  const [entity, setEntity] = useState();
  const [requestState, setRequestState] = useState(TOKEN_ENTITY_REQUEST_STATES.LOADING)
  const [isSaveSnackbarOpen, setSaveSnackbarOpen] = useState(true);

  if (!entity && data && requestState === TOKEN_ENTITY_REQUEST_STATES.LOADING) {
    const { linkedToken } = data;
    if (linkedToken.__typename != `Full${entityType}`) {
      const error = `Expecting a ${entityType} but received a ${linkedToken.__typename}`;
      console.error(error);
      setRequestState(TOKEN_ENTITY_REQUEST_STATES.LOADING_ERROR);
    } else {
      if(entityType === 'Provider') {
        setEntity({
          ...linkedToken,
          requests: linkedToken.requests.filter(x => !x.satisfied).map(x => x.type)
        })
      } else {
        setEntity(linkedToken)
      }
      setRequestState(TOKEN_ENTITY_REQUEST_STATES.LOADED);
    }
  }

  if(error && requestState === TOKEN_ENTITY_REQUEST_STATES.LOADING) {
    setRequestState(TOKEN_ENTITY_REQUEST_STATES.LOADING_ERROR);
  }

  const setField = field => value => {
    setEntity(state => ({
      ...state,
      [field]: value
    }))
  }

  const save = () => {
    setRequestState(TOKEN_ENTITY_REQUEST_STATES.SAVING);
    saveEntity({ variables: { token, ...entity } }).then(({ errors: systemErrors = [], data }) => {
      if(systemErrors.length) {
        setRequestState(TOKEN_ENTITY_REQUEST_STATES.SAVING_ERROR);
      } else {
        setSaveSnackbarOpen(true);
        setRequestState(TOKEN_ENTITY_REQUEST_STATES.SAVING_SUCCESS);
      }
    }).catch(e => {
      console.error(e);
      setRequestState(TOKEN_ENTITY_REQUEST_STATES.SAVING_ERROR);
    });
  }

  const acknowledgeSaveSnackbar = () => setSaveSnackbarOpen(false);

  return [requestState, entity, error, setField, save, isSaveSnackbarOpen, acknowledgeSaveSnackbar];
};

export default useTokenEntity;
