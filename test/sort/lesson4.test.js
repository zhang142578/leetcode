import sort from '../../code/sort/lesson4'

test('input:1', () => {
  expect(sort([1, 2, 0])).toBe(3)
})

test('input:2', () => {
  expect(sort([3, 4, -1, 1])).toBe(2)
})
