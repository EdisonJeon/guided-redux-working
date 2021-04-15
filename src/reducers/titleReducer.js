const initialState = {
    title: 'Dragon Member List 🐲',
    editing: false,
    dragons: [{id:1, name: "dragon1"}, {id:1, name: "dragon2"}, {id:1, name: "dragon3"}]
  };
  
  // STEP 4:
  // Build a "case" for each action that may be dispatched
  
  export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TITLE':
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      // NEW CASE HERE
      case 'TOGGLE_EDITING':
        return {
          ...state,
          editing: !state.editing
        };
      default:
        return state;
    }
  };
  
  // Starter reducer:
  // export const titleReducer = (state, action) => {
  //   switch (action.type) {
  //     default:
  //       return state;
  //   }
  // };
  