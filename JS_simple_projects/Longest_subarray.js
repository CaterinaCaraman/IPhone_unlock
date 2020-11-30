


//array.slice


function f(arr, map){
  let i = 0
  let i_best = 0
  let j_best = 0

  for (j=0; j<arr.length; j++){
    if (map[j] >= 0)
      i = Math.max(i, map[j] + 1)

    if (j - i > j_best - i_best){
       i_best = i
       j_best = j
    }
  }

  return [i_best, j_best]
}

let arr = [ 1, 4, 3, 2, 4, 2, 8, 1, 9]
let map = [-1,-1,-1,-1, 1, 3,-1, 0,-1]
console.log(f(arr, map))

arr = [ 1, 2, 2, 2, 2, 2, 1]
map = [-1,-1, 1, 2, 3, 4, 0]
console.log(f(arr, map))