import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import fauxData from './fauxData';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom';

describe('<List />', () => {

  it('renders something', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <List />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders a list', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <List commits={fauxData}/>
      </BrowserRouter>
    )
    // toJson(wrapper)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})