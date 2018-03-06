import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../../actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions Creators', () => {
  describe('Synchenous Actions', () => {
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
  });
  describe('async actions', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    describe('fetchSections', () => {
      it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        mock
          .onPost('/blah/sections').reply(200, {
            sections: [{ title: 'Travelling', googleId: 'random' }],
          });

        const expectedAction = [{
          type: actions.RECEIVE_SECTIONS,
          body: [{ title: 'Travelling', googleId: 'random' }],
        },
        ];
        const store = mockStore({ sections: [] });

        return store.dispatch(actions.fetchSections('blah')).then(() => {
          // return of async actions
          expect(store.getActions()).toEqual(expectedAction);
        });
      });
    });
  });
});

