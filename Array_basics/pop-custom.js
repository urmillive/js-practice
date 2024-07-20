class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }
    sum() {
        return this.reduce((acc, val) => acc + val, 0);
    }
}

MyArray.prototype.customPop = function () {
    if (this.length == 0) return undefined;
    const lastIndex = this.length - 1;
    const poppedItem = this[ lastIndex ];
    this.length = lastIndex;
    return poppedItem;
}

const girl = new MyArray('apple', 'banana', 'orange');
girl.customPop();
console.log(girl);
console.log(girl.length);


const numbers = new MyArray(1, 3, 2, 4, 5)
console.log(numbers.sum())