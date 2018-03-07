import axios from 'axios';

export const RECEIVE_SECTIONS = 'RECEIVE_SECTIONS';
export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (user, savedUser) => {
  user.savedUserId = savedUser.data._id;
  user.doesExist = savedUser.data.doesExist;
  return ({ type: LOGIN_USER, user });
};

export const receiveSections = sections => ({
  type: RECEIVE_SECTIONS,
  sections,
});


export function saveUser(user) {
  return dispatch => axios.post('http://127.0.0.1:5000/api/user', { googleId: user.email })
    .then(savedUser => dispatch(loginUser(user, savedUser)));
}


export function fetchSections(userId) {
  return dispatch => axios.get(`http://127.0.0.1:5000/api/user/${userId}/section`)
    .then(sections => dispatch(receiveSections(sections)));
}

export function fetchSectionsIfUserExists() {
  return (dispatch, getState) => {
    const { user } = getState();
    if (user.doesExist) {
      return dispatch(fetchSections(user.savedUserId));
    }
  };
}
