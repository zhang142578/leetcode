import subLoopStr from '../../code/regexp/lesson1'

test('subLoopStr', () => {
  expect(subLoopStr('abab')).toBe(true)
})
test('subLoopStr：2', () => {
  expect(subLoopStr('ababc')).toBe(false)
})
