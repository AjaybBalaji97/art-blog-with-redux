import React from 'react';
import renderer from 'react-test-renderer';
import CreatePostForm from '.';
import {shallow} from 'enzyme';



describe('PostContent',()=>{
    it('should render CreatePost button',()=>{
        const tree=renderer.create(<CreatePostForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});