import { renderHook } from '@testing-library/react-hooks'
import fetchMock from "fetch-mock";
import { useBtcPrice } from './useBtcPrice'

describe('useBtcPrice', () => {
  test('should return price from API', async () => {
    fetchMock.mock('https://api.coindesk.com/v1/bpi/currentprice/USD.json', {
      bpi: { USD: { rate: '31000' } }
    });

    const { result, waitForNextUpdate } = renderHook(() => useBtcPrice())
    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.price).toBe('31000');
    fetchMock.restore();
  });
});
