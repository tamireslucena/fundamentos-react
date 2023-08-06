// library methods
import { render, screen, within } from '@testing-library/react';

// components
import ItemsHandler from './';

test('should display three buttons', () => {
  render(<ItemsHandler />);
  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(3);
});

test('should display one textbox (input) element, with `Insira um item` as placeholder', () => {
  render(<ItemsHandler />);
  const textboxes = screen.getAllByRole("textbox");
  expect(textboxes.length).toBe(1);
});

test('renders one combobox (select) element, with two options initially', () => {
  render(<ItemsHandler />);
  const comboboxes = screen.getAllByRole("combobox");
  expect(comboboxes.length).toBe(1);

  const combobox = screen.getByRole("combobox");
  const options = within(combobox).getAllByRole("option")
  expect(options.length).toBe(2);
});
