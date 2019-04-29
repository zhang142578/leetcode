import flowers from '../../code/array/lesson3'

test('flowers', () => {
  expect(flowers([1, 0, 0, 0, 1], 1)).toBe(true)
  expect(flowers([0, 0, 1, 0], 2)).toBe(false)
})
