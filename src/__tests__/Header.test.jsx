import Header from "../components/Header";
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import AppStore from '../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it('should render header component and should have cart text', () => {

  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cart = screen.getByText('Cart (0)');
  const cart = screen.getByText(/Cart/);
  // const cart = screen.getByText(/cart/i); // Using 'i' flag to perform a case-insensitive match
  console.log(cart);
  expect(cart).toBeInTheDocument();
})

it('should go to cart page on click of cart', () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText(/Cart/);

  fireEvent.click(cart);

  // Assert that the current location pathname is '/cart'
  expect(window.location.pathname).toBe('/cart');

})