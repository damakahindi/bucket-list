export default (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_SECTIONS':
      return state.concat([action.sections]);
    default:
      return state;
  }
};
