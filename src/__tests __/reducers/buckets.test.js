import reducer from '../../reducers/buckets';

describe('Section reducer', () => {
  it('should return the initial state', () => {
    const initialSectionState = {
      buckets: [],
    };
    expect(reducer(initialSectionState, {})).toEqual({
      buckets: [],
    });
  });
});
