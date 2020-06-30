//this is the way we import in js (packages installed from npm)

const _ = require('lodash')


const myarray=_.range(1,9,2)//[start], stop, [step].
const array2=_.range(9)
console.log(myarray, array2)
    //the stop value is not included, it starts on 0 by default (indexes).

const smthelse = _.each(array2, (number, index) => {console.log(number, index)})
//smthelse is the return value from .each
