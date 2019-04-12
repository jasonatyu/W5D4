Array.prototype.bubbleSort = function() {
    var sorted = false; 
    let dup = this.slice(0);
    while (!sorted) {
        sorted = true;
        for ( i = 0; i < dup.length - 1; i++) {
            if (dup[i] > dup[i+1]) {
                let temp = dup[i];
                dup[i] = dup[i + 1];
                dup[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return dup; 
}

String.prototype.substrings = function() {
    const substrs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            substrs.push(this.slice(i, j));
        }
    }
    return substrs;
}


// .load phase_3_iteration.js