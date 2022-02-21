const initialState = {
  image: [],
  isOpenSpinner: true,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get_images": {
      return {
        ...state,
        image: action.data,
      };
    }
    case "set_or_remuve_spinner": {
      return {
        ...state,
        isOpenSpinner: action.isOpenSpinner,
      };
    }
    default:
      return state;
  }
};
export default globalReducer;
