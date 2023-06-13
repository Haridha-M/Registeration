import { SignUpData } from './sign-up-data';

describe('SignUpData', () => {
  it('should create an instance', () => {
    expect(new SignUpData('','','','',false)).toBeTruthy();
  });
});
