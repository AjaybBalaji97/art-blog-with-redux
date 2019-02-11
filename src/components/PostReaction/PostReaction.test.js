import React from 'react';
import renderer from 'react-test-renderer';
import PostReaction from '.';
import {shallow} from 'enzyme';


describe('PostReaction',()=>{
    it('should render header',()=>{
        const tree=renderer.create(<PostReaction  />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});