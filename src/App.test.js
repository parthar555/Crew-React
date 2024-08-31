import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should load the app', async() => {
    expect(<App />).toBeTruthy();
  })
})

