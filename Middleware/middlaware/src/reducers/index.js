const INITIAL_STATE = {
    isLoading: false,
    countries: [],
    message: ""
  };
  
  export const reducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
      case "GET_COUNTRIES_START":
        return { ...state, isLoading: true, message: "" };
      case "GET_COUNTRIES_SUCCESS":
        return { ...state, countries: actions.payload, isLoading: false };
        break;
      case "GET_COUNTRIES_ERROR":
        return { ...state, message: actions.payload, isLoading: false };
        break;
      default:
        break;
    }
  };
  