import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from '../components/ListItem';
import fauxData from './fauxData';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom';


describe('<ListItem />', () => {

  it('renders something', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ListItem />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders a ListItem', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ListItem item={fauxData}/>
      </BrowserRouter>
    )
    // toJson(wrapper)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})