import React from 'react';
import App from './App';
import Main from './pages/main/Main';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Main />).toJSON();
  expect(rendered).toBeTruthy();
});
