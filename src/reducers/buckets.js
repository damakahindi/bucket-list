export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_BUCKET':
      return state.concat([action.bucket]);
    default:
      return state;
  }
};
