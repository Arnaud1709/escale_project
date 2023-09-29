import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importez MemoryRouter
import Footer from './Footer';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: key => key }),
  withTranslation: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: key => key };
    return Component;
  },
}));

describe('Footer Component', () => {
  it('devrait afficher correctement les liens du pied de page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Vérifiez la présence des liens du pied de page
    expect(getByText('lodging')).toBeInTheDocument();
    expect(getByText('airstrip')).toBeInTheDocument();
    expect(getByText('pictures')).toBeInTheDocument();
    expect(getByText('surroundings')).toBeInTheDocument();
    expect(getByText('reservation')).toBeInTheDocument();
    expect(getByText('legalTerms')).toBeInTheDocument();
    expect(getByText('rgpd')).toBeInTheDocument();
    expect(getByText('profile')).toBeInTheDocument();
    expect(getByText('connection')).toBeInTheDocument();
    expect(getByText('accountCreation')).toBeInTheDocument();
  });
});
