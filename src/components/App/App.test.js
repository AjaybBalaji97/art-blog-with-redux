import React from 'react';
import renderer from 'react-test-renderer';
import App from '.';
import {shallow,mount} from 'enzyme';
import axios from 'axios';

describe('App',()=>{
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
        "image": "abstract.png"
    }]
    it('should render All Posts ',()=>{
        
        const tree=renderer.create(<App  />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
describe('App',()=>{
    it('componentDidMount should be called',()=>{
        const componentDidMountSpy = jest.spyOn(App.prototype, 'componentDidMount');
        const wrapper=shallow(<App/>);
        expect(App.prototype.componentDidMount).toHaveBeenCalled();
    })
})

describe('"Axios" axios get function', () => {
//     let getMock;
//     const mockPosts = {data:[{
//         userId: 1,
//         id: 1,
//         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//         body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//       }]};
//   beforeAll(() => {
//     getMock = jest.spyOn(axios, 'get');
//     getMock.mockImplementation(() => mockPosts);
//   });
//   afterAll(() => {
//     getMock.mockRestore();
//   });
    it('should call componentDidMount', async() => {
        //jest.mock('axios');
        const wrapper= shallow(<App/>);
        const resp = {data: [{cities: ['NY']}]};
        expect(wrapper.instance().state.axiosPosts).toEqual([]);
        //qaxios.get.mockImplementation(() => Promise.resolve(resp));
         await wrapper.instance().componentDidMount()
        expect(wrapper.instance().state.axiosPosts).not.toEqual([]);

    });
  });