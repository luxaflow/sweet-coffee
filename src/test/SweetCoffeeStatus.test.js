import React from 'react';
import { render } from '@testing-library/react';
import SweetCoffeeStatus from '../component/SweetCoffeeStatus';

it('Renders ready for input', () => {
  const {queryByText} = render(<SweetCoffeeStatus />);
  expect(queryByText('Klaar voor keuze')).toBeTruthy();
});
