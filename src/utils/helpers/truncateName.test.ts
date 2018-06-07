import truncateName from './truncateName';

describe('Tests for the truncate name helper function', () => {
  it('should throw an error when an empty string is passed as an argument to the function', () => {
    expect(truncateName(' ')).toEqual('Full name must be a string');
  });

  it('should throw an error if a value of undefined is passed as an argument to the function', () => {
    expect(truncateName(undefined)).toEqual('Full name must be a string');
  });

  it('should throw an error if a value of null is passed as an argument to the function', () => {
    expect(truncateName(null)).toEqual('Full name must be a string');
  });

  it('should properly truncate a user\'s full name', () => {
    const userName = 'Davy Jones';
    expect(truncateName(userName)).toEqual('Davy J.');
  });
});
