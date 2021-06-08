export const WEATHERCITIES = 'WEATHERCITIES';

export const addlist = item => ({
  type: WEATHERCITIES,
  payload: item,
});

const initialState = {
  weatherList: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHERCITIES:
      return {
        ...state,
        weatherList: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
