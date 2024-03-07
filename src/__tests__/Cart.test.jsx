import { act } from 'react-dom/test-utils';
import RestaurentDetails from '../components/RestaurentDetails';
import MOCK_DATA from '../mocks/restaurentDetails.json';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import "@testing-library/jest-dom";
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import Cart from '../components/Cart';

it('should add an item to cart', async () => {

  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA)
    })
  })

  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentDetails />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  });

  const resMenu = screen.getByText('New Launches (6)');

  fireEvent.click(resMenu);

  const items = screen.getAllByTestId('items');

  expect(items.length).toBe(6);

  const addBtns = screen.getAllByRole('button', { name: 'Add' });

  let cartText = screen.getByText('Cart (0)');

  fireEvent.click(addBtns[0]);

  cartText = screen.getByText('Cart (1)');

  expect(cartText).toBeInTheDocument();

  fireEvent.click(addBtns[2]);

  cartText = screen.getByText('Cart (2)');

  expect(cartText).toBeInTheDocument();

  let cartItems = screen.getAllByTestId('items');

  // 8 bcuse 6 are from Menu and added 2 items to cart
  expect(cartItems.length).toBe(8);

  const clearCart = screen.getByRole('button', { name: 'Clear Cart' });

  fireEvent.click(clearCart);

  cartItems = screen.getAllByTestId('items');

  // cleared 2 items from cart -> so 6 now
  expect(cartItems.length).toBe(6);

  expect(screen.getByText('Cart is empty!!!')).toBeInTheDocument();

})