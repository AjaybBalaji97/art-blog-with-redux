import React from 'react';
import renderer from 'react-test-renderer';
import PostReaction from '.';
import {shallow} from 'enzyme';


describe('PostReaction',()=>{
    it('should render clap and heart',()=>{
        const tree=renderer.create(<PostReaction  />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should trigger "handleClapClick" on clicking the "Clap" image',()=>{
        const wrapper=shallow(<PostReaction liked={false} claps={11} handleClapClick={jest.fn()}/>);
        wrapper.find('.clap').simulate('click');
        expect(wrapper.instance().props.handleClapClick).toHaveBeenCalled();
    })
    it('should trigger "handleLikeClick" on clicking the "Like" image',()=>{
        const wrapper=shallow(<PostReaction liked={false} claps={11} handleLikeClick={jest.fn()}/>);
        wrapper.find('.heart').simulate('click');
        expect(wrapper.instance().props.handleLikeClick).toHaveBeenCalled();
    })
});