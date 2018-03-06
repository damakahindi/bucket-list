import * as actions from '../../actions/index';

describe('actions', () => {
  it('should create an action to login a user', () => {
    const user = { googleId: 'random', name: 'Esther Dama' };
    const savedUser = { data: { doesExist: true, _id: 'blahblahblah' } };
    const expectedAction = {
      type: actions.LOGIN_USER,
      user,
    };
    expect(actions.loginUser(user, savedUser)).toEqual(expectedAction);
  });

  it('should create an action to receive receiveSections', () => {
    const sections = [{ title: 'Travelling', googleId: 'random' }];
    const expectedAction = {
      type: actions.RECEIVE_SECTIONS,
      sections,
    };
    expect(actions.receiveSections(sections)).toEqual(expectedAction);
  });
});
