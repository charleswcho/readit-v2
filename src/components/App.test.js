import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';
import App from './App';

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe('Unit tests', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });

  it('should test true === true', () => {
    expect(true).toBe(true);
  });

  it('renders app name', () => {
    render(<App />);
    expect(screen.getByText('Readit')).toBeInTheDocument();
  });

  it('handles select input changes', async () => {
    render(<App />);

    fireEvent.click(screen.getByText('Best'));

    await waitFor(() => screen.getByText('Hot'));

    fireEvent.click(screen.getByText('Hot'));

    await waitFor(() => screen.getByText('Hot'));

    expect(screen.getByText('Hot')).toBeInTheDocument();
  });

  test('handles tab changes for mobile view', async () => {
    window.matchMedia = createMatchMedia('380px');

    render(<App />);

    fireEvent.click(screen.getByText('Best'));

    await waitFor(() => screen.getByText('Hot'));

    fireEvent.click(screen.getByText('Hot'));

    await waitFor(() => screen.getByText('Hot'));

    expect(screen.getByText('Hot')).toBeInTheDocument();
  });
});
