import {doNTimes} from './do-n-times';

describe('doNTimes', () => {
  it('calls callback 3 times', () => {
    const fn = jest.fn();
    doNTimes(fn, 3);
    expect(fn).toHaveBeenCalledTimes(3);
  });
})