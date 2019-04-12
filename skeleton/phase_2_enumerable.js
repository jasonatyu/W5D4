Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    const results = [];
    this.myEach((ele) => results.push(callback(ele)));
    return results;
}

Array.prototype.myReduce = function(callback, initial_val) {
    if (!initial_val) {
        initial_val = 0; 
    } 
    let accumulator = initial_val;
    this.myEach((ele) => { accumulator = callback(accumulator, ele) });
    return accumulator; 
}

function callback(acc, ele) {
    return acc + ele;
}

Array.prototype
