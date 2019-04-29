// export default (str) => {
//   let arr = str.split(' ')
//   let result = arr.map(item => {
//     return item.split('').reverse().join('')
//   })
//   return result.join(' ')
// }
export default (str) => {
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
