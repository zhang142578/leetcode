import quickSort from '../../code/sort/lesson5'
test('quickSort:1', () => {
  expect(quickSort([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5])
})

test('quickSort:2', () => {
  expect(quickSort([7, 6, 8, 9, 1])).toEqual([1, 6, 7, 8, 9])
})
