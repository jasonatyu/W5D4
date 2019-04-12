Array.prototype.uniq = function() {
    const unique = []
    for (let i = 0; i < this.length; i++ ) {
        if (!unique.includes(this[i])) {
            unique.push(this[i])
        }
    }
    return unique; 
}

Array.prototype.twoSum = function() {
    const result = [];
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                result.push([i, j])
            }
        }
    }
    return result;
}

Array.prototype.transpose = function() {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        let sub_arr = [];
        for (let j = 0; j < this.length; j++) {
            sub_arr.push(this[j][i]);
        }
        result.push(sub_arr);
    }
    return result; 
}