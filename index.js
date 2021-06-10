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
// reduceToTotal returns a running total when not given a starting point
//          reduces correctly:

function reduceToTotal(elements, aggregator=0) {
    let total = aggregator
    elements.forEach(element=>{
         total = total + element
    })
    return total 
}

// reduceToAllTrue returns true when all values are truthy
    // reduceToAllTrue returns false when any value is falsy
      
    function reduceToAllTrue(array) {
        for (let i = 0; i < array.length; i++ ) {
            console.log(array[i]);
            console.log(!array[i])
            if (!array[i]) return false
          }
          return true
        }

//         for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement
// !Returns false if its single operand that can be converted to true; otherwise, returns true.
//returns the opposite of what it is, essentially
// !"someone" evaluates to false because a string would evaluate to true. !!"someone" evaluates to true

// reduceToAnyTrue returns true when a true value is present
      
//     reduceToAnyTrue returns false when no true value is present
      
function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
        console.log(array[i]);
        console.log(!array[i])
        if (!!array[i]) return true
      }
      return false
}