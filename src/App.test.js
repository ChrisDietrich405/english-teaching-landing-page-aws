import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders main elements correctly', () => {
    render(<App />);
    
    // Check if main elements are rendered
    expect(screen.getByText(/Chris Dietrich/)).toBeInTheDocument();
    expect(screen.getByText(/Professor de Inglês/)).toBeInTheDocument();
    expect(screen.getByAltText(/about me/)).toBeInTheDocument();
    expect(screen.getByText(/aulas de inglês online/)).toBeInTheDocument();
    expect(screen.getByText(/\$17\/hora/)).toBeInTheDocument();
    expect(screen.getByText(/Beneficios/)).toBeInTheDocument();
    expect(screen.getByText(/O que estao dizendo\?/)).toBeInTheDocument();
    expect(screen.getByText(/Copyright © 2021/)).toBeInTheDocument();
  });

  test('renders testimonials correctly', () => {
    render(<App />);
    
    // Check if testimonials are rendered
    expect(screen.getByText(/Fabiana Saraiva/)).toBeInTheDocument();
    expect(screen.getByText(/Fabio Novais/)).toBeInTheDocument();
    expect(screen.getByText(/Rodrigo Pitorri/)).toBeInTheDocument();
    expect(screen.getByText(/Mirian Cardoso/)).toBeInTheDocument();
  });

  // Add more specific tests based on your requirements
});
