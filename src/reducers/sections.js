export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_SECTIONS':
      return Object.assign({}, state, action.sections);
    default:
      return state;
  }
};
