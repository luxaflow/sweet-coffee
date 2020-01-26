import React from 'react';
import { render, cleanup} from '@testing-library/react';
import ErrorMessage from '../component/ErrorMessage';

afterEach(cleanup);

const componentState = {
  errorMessage: 'Geen Water druk'
}

it('Renders with correctt error message', () => {
  const { findAllByText } = render(
    <ErrorMessage text={componentState.errorMessage}/>
  )
  
  expect(findAllByText("Geen water druk")).toBeTruthy()
});
