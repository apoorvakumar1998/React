import { render, screen } from "@testing-library/react"
import RestaurentCard from "../components/RestaurentCard"
import MOCK_DATA from '../mocks/restaurentCard.json';
import "@testing-library/jest-dom";

it('Should render restaurent card with prop data', () => {

  // Issue with object destructuring
  render(<RestaurentCard data={MOCK_DATA.data} />)

  const title = screen.getByText('California Burrito');

  expect(title).toBeInTheDocument();
})