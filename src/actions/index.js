import axios from 'axios';

export const RECEIVE_SECTIONS = 'RECEIVE_SECTIONS';
export const SELECT_SECTIONS = 'SELECT_SECTIONS';
export const ADD_SECTION = 'ADD_SECTION';
export const ADD_BUCKET = 'ADD_BUCKET';
export const LOGIN_USER = 'LOGIN_USER';

let sectionId = 0;
let bucketId = 1000;

const loginUser = (user, savedUser) => {
  user.savedUserId = savedUser.data._id;
  user.doesExist = savedUser.data.doesExist;
  return ({ type: LOGIN_USER, user });
};

export function receiveSections(sections) {
  return {
    type: RECEIVE_SECTIONS,
    sections,
  };
}


export function addBuckets(bucket) {
  return {
    type: ADD_BUCKET,
    bucket: { title: bucket.title, description: bucket.description, id: bucketId++ },
  };
}

export function addSections(section) {
  return {
    type: ADD_SECTION,
    section: { title: section.title, description: section.description, id: sectionId++ },
  };
}


export function saveUser(user) {
  return dispatch => axios.post('http://127.0.0.1:5000/api/user', { googleId: user.email })
    .then(savedUser => dispatch(loginUser(user, savedUser)));
}


function fetchSections(userId) {
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
