import React from 'react';
import { render } from '@testing-library/react';
import ErrorComponent from '../component/ErrorComponent';

it('Renders without crashing', () => {

  const div = render(<ErrorComponent />);
  
});