import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Body from './Body';
import { useTranslation } from 'react-i18next';

describe('Body Component', () => {
  it('devrait afficher le composant Home par défaut', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
      </MemoryRouter>
    );

    const itemToHover = screen.getByText('Terrasse');

    fireEvent.mouseEnter(itemToHover);
    expect(itemToHover).toHaveStyle('background-color: #cbe3f9;');
    
    fireEvent.mouseLeave(itemToHover);
    expect(itemToHover).not.toHaveStyle('background-color: #79b7f0;');
  });

  it('devrait afficher le composant Contact lorsque la route "/contact" est atteinte', () => {
    render(
      <MemoryRouter initialEntries={['/contact/*']}>
        <Routes>
          <Route path="/contact/*" element={<Body />} />
        </Routes>
      </MemoryRouter>
    );

    // Vérifiez que le composant Contact est rendu lorsque la route "/contact" est atteinte
    expect(screen.getByText("Nous contacter")).toBeInTheDocument();
  });

});
