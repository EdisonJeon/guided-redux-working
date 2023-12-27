import {
  UPDATE_TITLE,
  TOGGLE_EDITING,
  UPDATE_NEW_TITLE,
} from "../actions/titleActions";

export const initialState = {
  title: "Dragon Member List 🐲",
  editing: false,
  newTitle: "",
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        newTitle: '',
        title: action.payload,
        editing: false,
      };
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing,
      };
    case UPDATE_NEW_TITLE:
      return {
        ...state,
        newTitle: action.payload,
      };
    default:
      return state;
  }
};
