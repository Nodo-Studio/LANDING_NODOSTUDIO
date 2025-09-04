import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders correctly', () => {
    render(<App />);
    // Buscamos el div principal que tiene la clase 'container-app'
    const appContainer = screen.getByRole('main');
    expect(appContainer).toBeInTheDocument();
  });
});
