export default (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_SECTIONS':
      return state.concat([action.sections]);
    case 'ADD_SECTION':
      return state.concat([action.section]);
    default:
      return state;
  }
};
