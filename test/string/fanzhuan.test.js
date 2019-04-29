import fanzhuan from '../../code/string/fanzhuan'
test('fanzhuan:s = "abcdefg", k = 2', () => {
  expect(fanzhuan('abcdefg', 2)).toBe('bacdfeg')
})
