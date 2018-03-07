import reducer from '../../reducers/sections';

describe('Section reducer', () => {
  it('should return the initial state', () => {
    const initialSectionState = {
      sections: [],
    };
    expect(reducer(initialSectionState, {})).toEqual({
      sections: [],
    });
  });
});
