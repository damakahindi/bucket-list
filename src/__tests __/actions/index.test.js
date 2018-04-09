import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../actions/index';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('Actions Creators', () => {
  describe('Synchronous Actions', () => {
    describe('loginUser', () => {
      it('should create an action to login a user', () => {
        const user = { googleId: 'random', name: 'Esther Dama' };
        const savedUser = { data: { doesExist: true, _id: 'blahblahblah' } };
        const expectedAction = {
          type: actions.LOGIN_USER,
          user,
        };
        expect(actions.loginUser(user, savedUser)).toEqual(expectedAction);
      });
    });
    describe('receiveSections', () => {
      it('should create an action to receive receiveSections', () => {
        const sections = [{ title: 'Travelling', googleId: 'random' }];
        const expectedAction = {
          type: actions.RECEIVE_SECTIONS,
          sections,
        };
        expect(actions.receiveSections(sections)).toEqual(expectedAction);
      });
    });
    describe('addBuckets', () => {
      it('should create an action to receive addBuckets', () => {
        const bucket = { title: 'Travelling', description: 'random', id: 1000 };
        const expectedAction = {
          type: actions.ADD_BUCKET,
          bucket,
        };
        expect(actions.addBuckets(bucket)).toEqual(expectedAction);
      });
    });
    describe('addSection', () => {
      it('should create an action to receive addSection', () => {
        const section = { title: 'Travelling', description: 'random', id: 1 };
        const expectedAction = {
          type: actions.ADD_SECTION,
          section,
        };
        expect(actions.addSections(section)).toEqual(expectedAction);
      });
    });
  });
  describe('async actions', () => {
    describe('fetchSections', () => {
      it('creates FETCH_RECEIVE_SECTIONS when fetching sections has been done', () => {
        const expectedAction = [{
          type: actions.RECEIVE_SECTIONS,
          section: [{ title: 'Travelling', googleId: 'random' }],
        },
        ];
        const store = mockStore([]);
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: [{ title: 'Travelling', googleId: 'random' }],
          }).then(() => {
            store.dispatch(actions.fetchSections('blah'));
            expect(store.getActions()).toEqual(expectedAction);
          });
        });
      });
    });
  });
});

