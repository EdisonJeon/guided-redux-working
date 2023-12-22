const initialState = {
  members: [
    { name: "Jojo Zhang", dragonStatus: true },
    { name: "Brandon Harris", dragonStatus: false },
  ],
};

export const dragonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      const luckyNumber = Math.round(Math.random());
      console.log(luckyNumber);
      const newMember = {
        name: action.payload,
        dragonStatus: luckyNumber === 1 ? true : false,
      };
      return {
        ...state,
        members: [...state.members, newMember],
      };
    default:
      return state;
  }
};
