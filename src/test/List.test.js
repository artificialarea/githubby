import React from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import { BrowserRouter } from 'react-router-dom';

describe.skip('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <List />
      </BrowserRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  })
})