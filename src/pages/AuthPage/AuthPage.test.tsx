// react libraries
import * as React from 'react';

// third-party libraries
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

// tslint:disable-next-line:import-name
import AuthPage from './index';

describe('Auth page', () => {
  
  const props = {
    ANDELA_AUTH_HOST: 'TEST_AUTH_HOST',
    AUTH_REDIRECT_URL: 'TEST_REDIRECT_URL',
  };
  
  it('should be rendered properly', () => {
    const wrapper = shallow(<AuthPage { ...props }/>);

    expect(wrapper.find('button').exists).toBeTruthy();
    expect(enzymeToJson(wrapper)).toMatchSnapshot();
  });

  it('should redirect to andela authentication service  when the button is clicked', () => {
    
    // mock the replace function from jest jsdom
    window.location.replace = jest.fn();
    const wrapper = shallow(<AuthPage { ...props } />);
    const redirectUrl = `${props.ANDELA_AUTH_HOST}/login?redirect_url=${props.AUTH_REDIRECT_URL}`;

    wrapper.find('button').simulate('click');
    expect(window.location.replace).toHaveBeenCalledWith(redirectUrl);
  });
});
