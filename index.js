// Your code here

// returns an array with all values made negative
//          transforms correctly
let newArray = []
function mapToNegativize(array) {
    array.forEach(element => {
        
        
        newArray.push(element *-1)
    });
    return newArray
}

// mapToNoChange returns an array with the original values
function mapToNoChange(array) {
    return array
}
// mapToDouble returns an array with the original values multiplied by 2

let doubles = []
function mapToDouble(array) {
    array.forEach(element=> {
        doubles.push( element * 2) 
    })
    return doubles
}

// mapToSquare returns an array with the original values squared

let squared = []
function mapToSquare(array) {
    array.forEach(element=> {
        squared.push(element * element)
    })
    return squared
}