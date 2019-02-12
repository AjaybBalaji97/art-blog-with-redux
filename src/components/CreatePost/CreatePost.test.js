import React from 'react';
import renderer from 'react-test-renderer';
import CreatePost from '.';
import {shallow} from 'enzyme';


describe('PostContent',()=>{
    it('should render CreatePost button',()=>{
        const tree=renderer.create(<CreatePost />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});