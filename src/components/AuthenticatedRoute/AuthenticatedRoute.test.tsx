// react libraries
import * as React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

// third-party libraries
import * as Cookies from 'cookies-js';
import { mount, shallow } from 'enzyme';

// components
import AuthenticatedRoute from './index';

describe('The AuthenticatedRoute component', () => {
  const TestComponent = () => <div></div>;

  it('mounts the component if the user is authenticated', () => {
    const authToken = 'SOME_RANDOM_TOKEN';
    Cookies.set('jwt-token', authToken);

    const wrapper = mount(
      <MemoryRouter>
        <AuthenticatedRoute component={TestComponent} />
      </MemoryRouter>
    );
    expect(wrapper.find(TestComponent).length).toBe(1);
  });

  it('redirects the user if the user is not authenticated', () => {
    Cookies.expire('jwt-token');

    const wrapper = shallow(<AuthenticatedRoute component={TestComponent} />);
    const route = wrapper.find(Route);
    const redirect = route.props().render();

    expect(redirect.props.to).toBe('/');
  });
});
