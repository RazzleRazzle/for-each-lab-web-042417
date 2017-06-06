function iterativeLog(array) {
  array.forEach(function(e,i) {
    console.log(`${i}: ${e}`)
})
}

function iterate(callback) {
  var myArray = ['blueberry', 'raspberry', 'turtleberry']
  callback(myArray)
  return myArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
