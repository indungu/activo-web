
const DISPLAY_DETAILS = 'DISPLAY_DETAILS';
type DISPLAY_DETAILS = typeof DISPLAY_DETAILS;

const initialState = {
  user: {
    firstname: 'Ghenghes',
    lastname: 'Khan'
  }
};

export const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_DETAILS:
      return {
        ...state
      };
    default:
      return state;
  }
}
