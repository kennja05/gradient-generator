import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';

describe('App renders without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
})

describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});

describe('Looking at multiplication', () => {
  it('multiplies numbers', () => {
    expect(3 * 5).toEqual(15)
  })
})

describe('Looks at the Title', () => {
  it('Correctly Displays Title', () => {
    const {getByText} = render(<App />);
    expect(getByText('Linear Gradient Generator')).toBeInTheDocument();
  })
})