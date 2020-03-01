
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let numbers = [];
  if(Array.isArray(matrix) && matrix.length) {
      matrix.map((item, index) => {
          if(index%2 !== 0) {
             return item.reverse();
          } else {
              return item;
          }
      });
      let result = matrix.reduce((accum, currentValue) => {
          return accum.concat(currentValue);
          
      });
      return result;
  } else {
    return numbers;
  }
}


