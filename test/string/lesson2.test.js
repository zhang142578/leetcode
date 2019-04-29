import substring from '../../code/string/lesson2'

test('substring(00110011)', () => {
  expect(substring('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})
test('substring(10101)', () => {
  expect(substring('10101')).toEqual(['10', '01', '10', '01'])
})
