import React from 'react';
import renderer from 'react-test-renderer';
import Post from '.';
import {shallow} from 'enzyme';


describe('PostContent',()=>{
    const products={
        "date": "2nd Januray, 2018",
        "readingTime": "2 mins",
        "title": "The future of abstract art and the culture ...",
        "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
        "claps": 10,
        "liked": false,
        "image": "abstract.png"
    }
    it('should render Post contents',()=>{
        
        const tree=renderer.create(<Post product={products} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should initialize a state variable with value same as the props',()=>{
        const wrapper=shallow(<Post  product={products}/>);
        //wrapper.find('counter').simulate('click');
        expect(wrapper.instance().state.liked).toEqual(false);
        expect(wrapper.instance().state.claps).toEqual(10);
    })
    it('should increment the counter on "incrementCount" function',()=>{
        const wrapper=shallow(<Post  product={products}/>);
        wrapper.instance().handleClapClick()
        expect(wrapper.instance().state.claps).toEqual(11)
    })
    it('should decrement the counter on "decrementCount" function',()=>{
        const wrapper=shallow(<Post  product={products}/>);
        wrapper.instance().handleLikeClick()
        expect(wrapper.instance().state.liked).toEqual(true)
    })

});