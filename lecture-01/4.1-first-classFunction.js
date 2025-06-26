const x = [0, 1, 2, 3, 4, 5]

function addOne(number) {
    return number + 1
    
}

addOne(1) // 2

x.map

x.map(addOne) // [1, 2, 3, 4, 5, 6]

function isGreaterThanOne(num) {
    return num > 1
}

isGreaterThanOne(2) // true
isGreaterThanOne(0) // false
console.log(x.filter(isGreaterThanOne)) // [2, 3, 4, 5]

function add(x, y) {
    return x + y
}

add(1, 2) // 3

x // [0, 1, 2, 3, 4, 5]

x.reduce(add) // 15 = 0 + 1 + 2 + 3 + 4 + 5
// reduce takes a function and applies it to each element in the array, accumulating the result
