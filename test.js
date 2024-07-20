
// const nums = [ 1, 15, 1, 8, 15, 15, 1 ];

// const theImposter = function (nums) {
//     if (nums.length <= 1) {
//         return false;
//     }

//     let seen = new Map();
//     const checking = [];
//     let count = 0;
//     for (let num of nums) {
//         if (seen.has(num)) {
//             count++;
//             const obj = Object.assign({
//                 number: num,
//                 counter: count
//             });
//             checking.push(obj);
//         }
//         seen.add(num);
//     }

//     // return checking;
// };

// console.log('====================================');
// console.log(theImposter(nums));
// console.log('====================================');



const nums = [ 1, 15, 1, 8, 15, 15, 1 ];

const theImposter = function (nums) {
    if (nums.length <= 1) {
        return false;
    }

    let seen = new Map();
    for (let num of nums) {
        if (seen.has(num)) {
            seen.set(num, seen.get(num) + 1);
        } else {
            seen.set(num, 1);
        }
    }

    console.log(seen);
    let minCount = Infinity;
    let leastRepeatedNum;

    for (let [ num, count ] of seen) {
        if (count < minCount) {
            minCount = count;
            leastRepeatedNum = num;
        }
    }

    return leastRepeatedNum;
};

console.log('====================================');
console.log(theImposter(nums));
console.log('====================================');
