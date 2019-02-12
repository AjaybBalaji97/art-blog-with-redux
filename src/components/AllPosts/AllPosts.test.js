import React from 'react';
import renderer from 'react-test-renderer';
import AllPosts from '.';
import {shallow} from 'enzyme';


describe('PostContent',()=>{
    const products=[{
        "date": "2nd Januray, 2018",
        "readingTime": "2 mins",
        "title": "The future of abstract art and the culture ...",
        "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
        "claps": 10,
        "liked": false,
        "image": "abstract.png"
    },{
        "date": "2nd Januray, 2018",
        "readingTime": "2 mins",
        "title": "The future of abstract art and the culture ...",
        "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
        "claps": 10,
        "liked": false,
        "image": "abstract1.png"
    }]
    it('should render All Posts ',()=>{
        
        const tree=renderer.create(<AllPosts posts={products} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});