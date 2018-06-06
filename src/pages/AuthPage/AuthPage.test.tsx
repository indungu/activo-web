// react libraries
import * as React from 'react';
import { Redirect } from 'react-router-dom';

// third-party libraries
import { shallow } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

import * as Cookies from 'cookies-js';

// tslint:disable-next-line:import-name
import AuthPage from './index';

describe('Auth page', () => {
  const props = {
    ANDELA_AUTH_HOST: 'TEST_AUTH_HOST',
    AUTH_REDIRECT_URL: 'TEST_REDIRECT_URL',
    location: {
      search: '',
    },
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

    wrapper.find('.login-btn-container').simulate('click');
    expect(window.location.replace).toHaveBeenCalledWith(redirectUrl);
  });

  it('redirects user to dashboard if user is logged in', () => {
    const authToken = 'SOME_RANDOM_TOKEN';
    Cookies.set('jwt-token', authToken);

    const wrapper = shallow(<AuthPage { ...props } />);
    expect(wrapper.find(Redirect).length).toBe(1);
  });

  it('it shows an error message when authentication fails', () => {
    props.location.search = '?error=failed+to+create+user+token';
    const wrapper = shallow(<AuthPage { ...props } />);
    expect(wrapper.instance()).toHaveProperty(
      'errorMessage', 
      'Login unsuccessful. Please login with a valid Andela account'
    );
    expect(wrapper.find('#Toastify__toast-body').exists).toBeTruthy();
  });
});
