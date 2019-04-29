import sort from '../../code/sort/lesson3'

test('区间', () => {
  expect(sort([3, 6, 9, 1])).toBe(3)
})
test('区间2', () => {
  expect(sort([10])).toBe(0)
})
test('区间3', () => {
  expect(sort([13, 16, 19, 1])).toBe(12)
})
