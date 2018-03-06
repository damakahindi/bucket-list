import reducer from '../../reducers/user';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle LOGIN_USER', () => {
    expect(reducer({}, {
      type: 'LOGIN_USER',
      user: { googleId: 'random', name: 'Esther Dama' },
    })).toEqual({ googleId: 'random', name: 'Esther Dama' });
  });
});
