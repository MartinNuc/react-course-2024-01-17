import { render, screen, waitFor, act } from '@testing-library/react';
import { Joke } from './Joke';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({ value: 'A random joke' })
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('fetches and displays a joke on initial render', async () => {
  render(<Joke />);
  expect(await screen.findByText('A random joke')).toBeInTheDocument();
});