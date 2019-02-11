import React from 'react';
import renderer from 'react-test-renderer';
import BlogFooter from '.';
import {shallow} from 'enzyme';


describe('BlogHeader',()=>{
    it('should render header',()=>{
        const tree=renderer.create(<BlogFooter  />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});