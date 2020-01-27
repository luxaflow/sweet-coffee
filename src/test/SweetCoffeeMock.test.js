import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SweetCoffeeMachine from '../component/SweetCoffeeMock';
import ErrorComponent from '../component/ErrorComponent';

afterEach(cleanup);

const errorState = {
  errorValue: 0
};

it('Renders without errors', () => {
  
  const div = render(<SweetCoffeeMachine />);

});

it('Renders the correct errorr message onscreen', () => {
  errorState.errorValue = 2;

  const {findAllByText} = render(
    <SweetCoffeeMachine>
        <ErrorComponent value={errorState.errorValue}/>
    </SweetCoffeeMachine>
  );

  expect(findAllByText('Machine is kapot')).toBeTruthy()
});
