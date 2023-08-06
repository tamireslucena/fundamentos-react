// library methods
import { render, screen } from '@testing-library/react';

// components
import Home from './';

test('renders the clock element', () => {
  render(<Home />);
  const element = screen.getByTestId("clock");
  expect(element).toBeInTheDocument();
});

test('renders the itemsHandler element', () => {
  render(<Home />);
  const element = screen.getByTestId("itemsHandler");
  expect(element).toBeInTheDocument();
});

test('renders the shyBall element', () => {
  render(<Home />);
  const element = screen.getByTestId("shyBall");
  expect(element).toBeInTheDocument();
});
