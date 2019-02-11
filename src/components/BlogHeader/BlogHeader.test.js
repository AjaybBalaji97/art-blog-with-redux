import React from 'react';
import renderer from 'react-test-renderer';
import BlogHeader from '.';
import {shallow} from 'enzyme';


describe('BlogHeader',()=>{
    it('should render header',()=>{
        const tree=renderer.create(<BlogHeader  />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});