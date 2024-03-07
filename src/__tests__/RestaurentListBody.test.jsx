import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../components/Body";
import MOCK_DATA from '../mocks/restaurentList.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    }
  })
})

it("Should search resList for Pizza text input", async () => {

  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  })

  const cardsBeforeSearch = screen.getAllByTestId('resCard');

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole('button', { name: 'Search' });

  // give data-testid to the field and fetch using getByTestId
  const searchInput = screen.getByTestId('searchInput');

  //2nd parameter is simulating call back in onChange of input field
  fireEvent.change(searchInput, {
    target: {
      value: 'pizza'
    }
  })

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId('resCard');

  expect(cardsAfterSearch.length).toBe(2);

})

it("Should click on top rated restaurent and check the count of cards", async () => {

  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  })

  const topRatedButton = screen.getByRole('button', { name: 'Top Rated Restaurents' });

  fireEvent.click(topRatedButton);

  const resCards = screen.getAllByTestId('resCard');

  expect(resCards.length).toBe(9);

})