import React from 'react';
import { render, userEvent, screen } from '@testing-library/react';
import Calendar from './Calendar'; 
import i18n from '../../utilities/i18n';
import '@testing-library/jest-dom/extend-expect'; 
import 'regenerator-runtime/runtime'; 


const mockOnDateRangeChange = jest.fn();

describe('Calendar Component', () => {it('devrait afficher le composant correctement', () => {
  const { container } = render(<Calendar onDateRangeChange={mockOnDateRangeChange} />);
  const rangePickerElement = container.querySelector('.ant-picker.ant-picker-range');
  expect(rangePickerElement).toBeInTheDocument();
});

});
