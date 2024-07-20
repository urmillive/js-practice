// const arr = [ "ram", "lakhan", "kirat" ]

// // const ages = [ 21, 22, 35, 54, 34 ];
// // for (let age in ages) {
// //     console.log(ages[ age ] % 2 !== 1 ? ages[ age ] : "");
// // }

// // let compare = ages[ 0 ];
// // for (let i = 0; i < ages.length; i++) {
// //     if (compare < ages[ i ]) {
// //         compare = ages[ i ];
// //     }
// // }
// // console.log(compare);



// // const nums = [ 21, 22, 35, 54, 34 ];
// // let reverseArr = [];
// // for (let i = nums.length - 1; i >= 0; i--) {
// //     reverseArr.push(nums[ i ])
// // }
// // console.log(reverseArr);

// // const personArray = [ "harkirat", "rama", "priya" ];
// // const genderArray = [ "male", "male", "female" ];

// // for (let i = 0; i < personArray.length; i++) {
// //     if (genderArray[ i ] == "male") {
// //         console.log(personArray[ i ].charAt(0));
// //     }
// // }

// const users = [ {
//     firstName: "ram",
//     gender: "male"
// }
//     , {
//     firstName: "lakhan",
//     gender: "male"
// },
// {
//     firstName: "sita",
//     gender: "female"
// } ];

// for (let i = 0; i < users.length; i++) {
//     if (users[ i ].gender == "male") {
//         console.log(users[ i ].firstName);
//     }
// }



// function sum(num1, num2) {
//     let result = num1 + num2;
//     return display1(result);
// }

// function display1(data) {
//     console.log('====================================');
//     console.log("result of the sum is : ", data);
//     return display2(data);
//     console.log('====================================');
// }

// function display2(data) {
//     console.log('====================================');
//     console.log("Sum result is : ", data);
//     console.log('====================================');
// }

// sum(1, 2)


// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function display1(data) {
//     console.log('====================================');
//     console.log("result of the sum is : ", data);
//     console.log('====================================');
// }

// function display2(data) {
//     console.log('====================================');
//     console.log("Sum result is : ", data);
//     console.log('====================================');
// }

// sum(1, 2, display1);

function customSlice(str, startIndex, endIndex) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i >= startIndex && i < endIndex) {
            result = result + str[ i ];
        }
    }
    return result;
}

// mystring = "Urmil Rupareliya"
// console.log(mystring.slice(2, 5));
// console.log(customSlice(mystring, 2, 5))

str = "hari krishna"
console.log(str.replace("krishna", "Krushna"))

