import baseball from '../../code/stack/lesson1'

test('baseball:1', () => {
  expect(baseball(['5', '2', 'C', 'D', '+'])).toBe(30)
})
