
import { render, screen } from '@testing-library/react'
import About from '../components/About';
import "@testing-library/jest-dom";


describe('Testing About component', () => {

  // beforeAll(() => {
  //   console.log('beforeAll');
  // })

  // beforeEach(() => {
  //   console.log('beforeEach');
  // })

  // afterAll(() => {
  //   console.log('afterAll');
  // })

  // afterEach(() => {
  //   console.log('afterEach');
  // })

  test("should have 2 heading tags", () => {

    render(<About />);

    const heading = screen.getAllByRole('heading');
    //heading is a jsx element
    expect(heading.length).toBe(5);
  });

  // it -> same as test
  it('should have text -> swiggy clone', () => {
    render(<About />);

    const test = screen.getByText('This a swiggy clone app');

    expect(test).toBeInTheDocument();
  })

  it("should have a header with text ->About us", () => {

    render(<About />);

    const test = screen.getByRole('heading', { name: 'About us' });

    expect(test).toBeInTheDocument();

  })
})