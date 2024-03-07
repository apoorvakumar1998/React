import sum from "../components/sum";


test('testing sum function', () => {

  const total = sum(1, 2);

  expect(total).toBe(3);
})