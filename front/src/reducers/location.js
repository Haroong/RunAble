import produce from 'immer';

// initialState
export const initialState = {
  locationLoading: false,
  locationDone: false,
  locationError: null,
  locationData: {},
};

export const GET_LOCATION_REQUEST = 'GET_LOCATION_REQUEST';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_FAILURE = 'GET_LOCATION_FAILURE';

export const getLocationAction = (data) => ({
  type: GET_LOCATION_REQUEST,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_LOCATION_REQUEST:
        draft.locationLoading = true;
        draft.locationError = null;
        draft.locationDone = false;
        break;
      case GET_LOCATION_SUCCESS:
        draft.locationLoading = false;
        draft.locationDone = true;
        break;
      case GET_LOCATION_FAILURE:
        draft.locationLoading = false;
        draft.locationError = true;
        break;
      default:
        break;
    }
  });

export default reducer;
