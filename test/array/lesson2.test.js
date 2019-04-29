import card from '../../code/array/lesson2'

test('card', () => {
  expect(card([1, 1, 2, 2, 2, 2])).toBe(true)
  expect(card([1])).toBe(false)
})
