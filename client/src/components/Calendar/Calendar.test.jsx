import React from 'react';
import { render, userEvent, screen } from '@testing-library/react';
import Calendar from './Calendar'; // Assurez-vous d'importer correctement le composant
import { I18nextProvider } from 'react-i18next';
import i18n from '../../utilities/i18n';
import '@testing-library/jest-dom/extend-expect'; // Importez cette ligne pour étendre les matchers jest-dom
import 'regenerator-runtime/runtime'; // Importez cette ligne pour la prise en charge des fonctions asynchrones (async/await)


// Mock de la fonction onDateRangeChange
const mockOnDateRangeChange = jest.fn();

describe('Calendar Component', () => {it('devrait afficher le composant correctement', () => {
  const { container } = render(<Calendar onDateRangeChange={mockOnDateRangeChange} />);
  const rangePickerElement = container.querySelector('.ant-picker.ant-picker-range');
  expect(rangePickerElement).toBeInTheDocument();
});

});
