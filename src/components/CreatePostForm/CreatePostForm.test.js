/**
 * @jest-environment node
 */
import React from 'react';
import renderer from 'react-test-renderer';
import CreatePostForm from '.';
import {shallow,mount} from 'enzyme';
import axios from 'axios';


describe('CreatePostForm',()=>{
    let postMock;
    beforeAll(()=>{
        postMock = jest.spyOn(axios,'post');
        postMock.mockImplementation(()=>Promise.resolve({data:'Posted Data'}))
    })
    afterAll(()=>{
        postMock.mockRestore()
    })
    it('should render CreatePostForm ',()=>{
        const tree=renderer.create(<CreatePostForm />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should call "handleDataChange" on changing any form field',()=>{
        const component= shallow(<CreatePostForm />) ;
        const mockFn=jest.fn();
        component.find("#title").simulate('change',{target:{id:'title',value:'title'}});
        expect(component.find("#title").length).toEqual(1);
        expect(component.state('title')).toEqual('title');
        //component.unmount();
     })
     it('should call "handlePostData" on clicking submit button',()=>{
        const component= shallow(<CreatePostForm />) ;
        //console.log(component.find('.submit'));
        const mockFn=jest.fn();
        component.instance().handlePostData=mockFn();
        component.find(".submit").simulate('click',{target:{value:'submit',preventDefault:jest.fn()}});
        expect(mockFn).toHaveBeenCalled();
        //component.unmount();
        jest.restoreAllMocks();
     })
     xit('should call "handlePostData" on clicking submit button',async ()=>{
        const component= shallow(<CreatePostForm />) ;
        //console.log(component.find('.submit'));
        const mockFn=jest.fn();
        //component.instance().handlePostData=mockFn();
        component.find(".submit").simulate('click',{target:{value:'submit',preventDefault:jest.fn()}});
        await component.instance().handlePostData()
        
        expect(component.instance().state.status).toEqual('');
        //component.unmount();
        jest.restoreAllMocks();
     })


});