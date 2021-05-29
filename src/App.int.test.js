import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component integration tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('App contains current MOCKED price', async () => {
    jest.spyOn(window, 'fetch').mockResolvedValue({
      json: () => ({
        bpi: { USD: { rate: '31000' } }
      })
    });

    render(<App />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();

    await waitFor(() => {
      const linkElement = screen.getByText(/Current price of BTC is 31000/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('App contains current price', async () => {
    render(<App />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();

    await waitFor(() => {
      const linkElement = screen.getByText(/Current price of BTC is /i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
