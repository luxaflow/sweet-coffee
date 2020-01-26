import React from 'react';
import {render, cleanup, queryByRole, queryByText, queryAllByDisplayValue} from '@testing-library/react';
import SweetCoffeeSlider from '../component/SweetCoffeeSlider';

import StateContext from '../context/StateContext';

afterEach(cleanup);

const defaultProps = {
  onTouchEnd: jest.fn(),
  name: "Melk",
};

const context = { 
  menuDisabled: false, 
  capacity: {
    sugar: 0,
    milk: 5,
    chocolade: 5
  }
};

test('Renders Slider with Text Melk', () => {

  const { queryByText } = render(
    <StateContext.Provider value={context}>
      <SweetCoffeeSlider 
        name={defaultProps.name}
        value={50}
        onTouchEnd={defaultProps.onTouchEnd()}
      />
    </StateContext.Provider>
    );
    
    expect(queryByText("Melk")).toBeTruthy();
});

test('Renders Slider with Slider with value of 50', () => {
  const { getAllByDisplayValue } = render(
    <StateContext.Provider value={context}>
      <SweetCoffeeSlider
        name={defaultProps.name}
        value={50}
        onTouchEnd={defaultProps.onTouchEnd()}
      />
    </StateContext.Provider>
  );
    
  expect(getAllByDisplayValue("50")).toBeTruthy();
})