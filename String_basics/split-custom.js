str2 = "hare Krushna hare krushna krushna krushna hare hare"
const chanting = str2.split(" ")
console.log(chanting)

String.prototype.customSplit = function (separator) {
    const result = [];
    let str = '';
    for (let i = 0; i < this.length; i++) {
        if (this[ i ] !== separator) {
            str += this[ i ];
        } else {
            result.push(str);
            str = '';
        }
    }
    result.push(str);
    return result;
};

const chanting2 = str2.customSplit(" ")
console.log(chanting2)