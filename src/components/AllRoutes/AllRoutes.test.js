import React, { Component } from 'react';
import { shallow , mount} from 'enzyme';
import { Route } from 'react-router';
import App from '../App';
import CreatePostForm from '../CreatePostForm'
import AllRoutes from '.';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
const reactRouterDom = require('react-router-dom');
describe('routes',()=>{
    it('render the routes',()=>{
        const tree=shallow(<AllRoutes/>);
        expect(tree).toMatchSnapshot();
    })
    it('should render correct components to respectives routes', () => {
        const wrapper = shallow(<AllRoutes />);
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
          const routeProps = route.props();
          console.log(routeProps);
          pathMap[routeProps.path] = routeProps.component;
          return pathMap;
        }, {});
        //console.log(pathMap);
  //{ 'nurse/authorization' : NurseAuthorization, ... }

  //expect(pathMap['/home']).toBe(App);
  expect(pathMap['/posts']).toBe(CreatePostForm);
})
beforeAll(()=>{
    reactRouterDom.BrowserRouter=({children})=>(<div>{children}</div>);
});
it('should render correct components to respectives routes', () => {
    //App=jest.fn();

    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/home' ]}>
          <AllRoutes/>
        </MemoryRouter>
      );
      expect(wrapper.find(App)).toHaveLength(1);
      expect(wrapper.find(CreatePostForm)).toHaveLength(0);
})
it('should render correct components to respectives routes', () => {
    //App=jest.fn();

    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/posts' ]}>
          <AllRoutes/>
        </MemoryRouter>
      );
      expect(wrapper.find(App)).toHaveLength(0);
      expect(wrapper.find(CreatePostForm)).toHaveLength(1);
})
});