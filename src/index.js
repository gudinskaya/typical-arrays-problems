exports.min = function min(array) {
  let sortedArray = array
  if (sortedArray == false || !sortedArray || sortedArray == true && sortedArray.length === 0) {
    return 0
  }
  sortedArray.sort((a, b) => a - b)
  return sortedArray[0]
}

exports.max = function max(array) {
  let sortedArray = array
  if (sortedArray == false || !sortedArray || sortedArray == true && sortedArray.length === 0) {
    return 0
  }
  sortedArray.sort((a, b) => a - b)
  return sortedArray[sortedArray.length - 1]
}

exports.avg = function avg(array) {
  if (array == false || !array || array == true && array.length === 0) {
    return 0
  }
  let sum = 0
  let i = 0
  while (i < array.length) {
    sum += array[i]
    i += 1
  }
  return sum / array.length;
}
