import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('renders the todo app home page', () => {
  render(<App />);

  expect(
    screen.getByRole('link', { name: /my todos list/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /add a todo/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/no todos to display/i)).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /board/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /calendar/i })).not.toBeInTheDocument();
});

test('adds and deletes a todo', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/todo title/i), {
    target: { value: 'Buy milk' },
  });
  fireEvent.change(screen.getByLabelText(/todo description/i), {
    target: { value: 'Pick up milk after work' },
  });
  fireEvent.click(screen.getByRole('button', { name: /add todo/i }));

  expect(screen.getByText('Buy milk')).toBeInTheDocument();
  expect(screen.getByText('Pick up milk after work')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /delete/i }));

  expect(screen.queryByText('Buy milk')).not.toBeInTheDocument();
  expect(screen.getByText(/no todos to display/i)).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /board/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /calendar/i })).not.toBeInTheDocument();
});
