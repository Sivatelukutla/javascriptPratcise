// let array = [1,2,3,4,5];
// let result = ""
// for(let i=0;i<array.length;i++){
//     if(array[i] % 2 != 0){
//         result = result + array[i] + " "
//     }
// }

// console.log(result);

// let array = [1,2,3,4,5];
// let sum = 0;

// for(let i=0;i<array.length;i++){
//     if(i % 2 !== 0){
//         sum = sum + array[i]
//     }
// }

// console.log(sum);

// let array = [2,5,7,2,8,4,2,3];
// let num = 2;

// for(let i=0;i<array.length;i++){
//     if(array[array.length - i - 1] === num){
//         console.log(array.length - i - 1);
//         break;
//     }
// }


// let array = [1,4,6,3,10];
// let result = ""
// for(let i=0;i<array.length;i++){
//     if(i % 2 === 0){
//         result = result + array[i] + " "
//     }
// }

// console.log(result)


// let array = [1,2,3,4];
// let firstNumber = array[0];

// for(let i=0;i<array.length;i++){
//     if(array[i] > firstNumber){
//         firstNumber = array[i]
//     }
// }

// console.log(firstNumber)


// let array = [5,9,2,8,3,7];
// let resultSum = array[0] + array[1]
// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if((array[i]+array[j]) > resultSum){
//             resultSum = array[i] + array[j]
//         }
//     }
// }

// console.log(resultSum)

// let array = [1,4,6,3,10];

// let result = "";

// for(let i=0;i<array.length;i++){
//     result = result + array[array.length - i - 1] + " "
// }


// console.log(result)

// let array = [1,-4,-6,3,10,-20];
// let even = "";
// let odd = "";
// let negative = "";

// for(let i=0;i<array.length;i++){
//     if(array[i]<0){
//         negative = negative + array[i] + " "
//     }
//     else if(array[i]%2 === 0){
//         even = even + array[i] + " "
//     }
//     else{
//         odd = odd + array[i] + " "
//     }
// }

// console.log(negative);
// console.log(odd)
// console.log(even);


// let array = [5,9,2,8,3,7,5,3,2];

// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[j] < array[i]){
//             let temp = array[i]
//             array[i] = array[j]
//             array[j] = temp
//         }
//     }
// }

// // console.log(array)
// let newArray = [];

// for(let i=0;i<array.length;i++){
//     if(!newArray.includes(array[i])){
//         newArray.push(array[i])
//     }
// }

// console.log(newArray[1])


// let array = [1,2,3,4,5,6,7];

// for(let i=0;i<array.length-1;i+=2){
//     let temp = array[i];
//     array[i] = array[i+1];
//     array[i+1] = temp;
// }

// console.log(array)


// let array = [1,4,6,3,10];
// let newArray = [];

// for(let i=0;i<array.length;i++){
//     if(array[i]%2 === 0){
//         newArray.push(array[i])
//     }
// }

// let result = "";
// for(let j=0;j<newArray.length;j++){
//     result = newArray[j] + " " + result
// }

// console.log(result)


// let array = [1,2,3,4,5];

// for(let i=0;i<array.length;i++){
//     if(array[i] % 2 === 0){
//         array[i] = 0
//     }
// }

// console.log(array)

// let array = [1, 4, 6, 3, 10];

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[j] > array[i]) {
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//     }
// }

// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//     if (!newArray.includes(array[i])) {
//         newArray.push(array[i])
//     }
// }

// console.log(newArray[1])

// let array = [1,2,3,3,4,4,5];

// let newArray = [];

// for(let i=0;i<array.length;i++){
//     let count = 0;
//     for(let j=0;j<array.length;j++){
//         if(array[i] == array[j]){
//             count = count + 1;
//         }
//     }

//     if(count>= 2){
//         newArray.push(array[i])
//     }
// }

// let smallest = newArray[0];

// for(let i=0;i<newArray.length;i++){
//     if(smallest > newArray[i]){
//         smallest = newArray[i]
//     }
// }

// console.log(smallest)