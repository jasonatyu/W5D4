function range(start, end) {
    if (start === end) {
        return [start]; 
    }
    return [start] + range(start+1, end);
}

function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    return arr[0] + sumRec(arr.slice(1,arr.length));
}

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base; 
    }
    if (exp < 0) {
        return 1/exponent(base, -exp);
    }
    return base * exponent(base, exp - 1);
}

function exponent_2(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return base;
    }
    return exponent_2(base, Math.ceil(exp / 2)) * exponent_2(base, Math.ceil(exp / 2));
}

function fibonacci(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [1];
    }
    if (n === 2) {
        return [1,1];
    }
    let previous = fibonacci(n-1);
    previous.push(previous[previous.length - 1] + previous[previous.length-2]);
    return previous
}

function deepDup(arr) {
    let results = [];
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            results.push(deepDup(arr[i]));
        } else {
            results.push(arr[i]);
        }
    }
    return results; 
}

//.load phase_4_recursion.js

function bsearch(arr, target) {
    if (arr.length === 0) {
        return - 1; 
    }
    let middle = Math.floor(arr.length / 2);
    if (arr[middle] === target) {
        return middle; 
    } else if (arr[middle] > target) {
        return bsearch(arr.slice(0,middle), target)
    } else {
        let search_res = bsearch(arr.slice(middle, arr.length - 1), target)
        if (search_res) {
            return middle + search_res; 
        } else {
            return -1; 
        }
    }
}

function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let dup_arr = arr.slice(0);
    let middle = Math.floor(arr.length/2);
    let left = dup_arr.slice(0,middle);
    let right = dup_arr.slice(middle, dup_arr.length);
    return merge(mergesort(left), mergesort(right));
}

function merge(left,right) {
    const merged = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }
    return merged.concat(left).concat(right);
} 

function subsets(arr) {
    if (arr.length === 0) {
        return [[]];
    }
    sets = subsets(arr.slice(0,arr.length - 1));
    return sets.concat(sets.map( (x) => { x.concat(arr[arr.length-1]) })); 
}

