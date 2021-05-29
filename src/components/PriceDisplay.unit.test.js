import { render, screen } from '@testing-library/react';
import { PriceDisplay } from './PriceDisplay';

describe('PriceDisplay', () => {
  test('PriceDisplay shows info from the props', () => {
    render(<PriceDisplay crypto='ETH' price='20.5' />);
    const linkElement = screen.getByText(/Current price of ETH is 20.5/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('PriceDisplay regression test', () => {
    const tree = render(<PriceDisplay crypto='ETH' price='20.5' />).asFragment();
    expect(tree).toMatchSnapshot();
  });
});
