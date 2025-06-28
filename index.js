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

// let arr = [10, 20, 30, 40, 50, 60, 70];
// let result;

// let number = arr.length / 2
// if (number % 2 === 0) {
//     result = arr.slice(0, number)
// }
// else {
//     result = arr.slice(0, Math.floor(number))
// }



// console.log(result)


// let arr = [10,20,30,40,50,60,70];
// let result;

// let number = arr.length / 2
// if (number % 2 === 0) {
//     result = arr.slice(number, number)
// }
// else {
//     result = arr.slice(Math.floor(number), arr.length);
// }

// console.log(result);

// let arr = [1,2,3,4];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         console.log(arr[i], arr[j]);
//     }
// }

// let arr = [1,2,3,4,5];
// let num = 6;

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] + arr[j] === num){
//             console.log(arr[i], arr[j])
//         }
//     }
// }

// let arr = [2,4,6,3,8,9];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         let numI = arr[i];
//         let numJ = arr[j];
//         if(numI % 2 == 0 && numJ % 2 == 0){
//             console.log(arr[i], arr[j])
//         }
//     }
// }

// let arr = [2,4,6,3,8,9,9,2,3,4,5];

// let result = arr.filter((ele,index,arr)=>{
//     return arr.indexOf(ele) == index;
// })

// console.log(result)

// let arr = [1,2,3];
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         count = count + 1
//     }
// }

// console.log(count)

// let arr = [1,2,3];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         let sum = arr[i] + arr[j]
//         let count = 0;
//         for(let k=2;k<=sum;k++){
//             if(sum % k === 0){
//                 count += 1
//             }
//         }
//         if(count === 1){
//             console.log(arr[i], arr[j])
//         }
//     }
// }


// let arr = [3,1,5,4,2];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i] < arr[j]){
//             console.log(arr[i], arr[j])
//         }
//     }
// }


// let arr = [4,9,2,7,5];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]>arr[i]){
//             console.log(arr[i], arr[j]);
//         }
//     }
// }

// let arr = [2,3,5,7,9];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         let firstNum = arr[i];
//         let secondNum = arr[j];
//         let firstCount = 0;
//         let secondCount = 0;
//         for(let k=1;k<=firstNum;k++){
//             if(firstNum % k == 0){
//                 firstCount = firstCount + 1;
//             }
//         }
//         for(let l=1;l<=secondNum;l++){
//             if(secondNum % l == 0){
//                 secondCount = secondCount + 1;
//             }
//         }
//         if(firstCount == 2 & secondCount == 2){
//             console.log(arr[i],arr[j])
//         }
//     }
// }


// let arr = [1,2,3,6,4,5,7]
// let arr = [1,2,3,4,5];

// let count = 0;

// for(let i=0;i<arr.length;i++){
//     count = count + 1;
//     if(arr[i] !== count){
//         console.log(count);
//         break;
//     }else{
//         console.log("-1")
//         break;
//     }
// }


// let arr = [1,2,3,4,5];
// let arr1 = [3,4,5,6,7];
// let newArray = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2 !== 0){
//         for(let j=0;j<arr1.length;j++){
//             if(arr[i] == arr1[j]){
//                 newArray.push(arr[i])
//             }
//         }
//     }
// }

// console.log(newArray)

// let arr = [2,4,5,5,7,8];
// let arr1 = [2,3,5,5,6,7,8];
// let newArray = [];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr1.length;j++){
//         if(arr[i] == arr1[j]){
//             newArray.push(arr[i])
//         }
//     }
// }




// console.log(newArray);



// let arr = [2,4,5,5,7,8];
// let arr1 =  [2,3,5,5,6,7,8];

// let newArray = [];

// for(let i=0;i<arr.length;i++){
//     let count = 1;
//     for(let j=0;j<arr1.length;j++){
//         if(arr[i] == arr1[j]){
//             count = count + 1;
//         }
//     }
//     if(count == 1){
//         continue
//     }
//     else{
//         newArray.push(arr[i])
//     }
// }

// console.log(newArray)

// let arr = [1, 2, 3, 4, 5, 6];
// let arr1 = [6, 5, 4, 3, 2];

// let newArray = [];

// for (let i = 0; i < arr.length; i++) {
//     let count = 1;
//     for (let j = 0; j < arr1.length; j++) {
//         if (arr[i] == arr1[j]) {
//             count = count + 1
//         }
//     }
//     if (count == 1) {
//         continue
//     }
//     else {
//         newArray.push(arr[i])
//     }
// }

// for (let i = 0; i < newArray.length; i++) {
//     for (let j = i + 1; j < newArray.length; j++) {
//         if (newArray[j] < newArray[i]) {
//             let temp = newArray[i];
//             newArray[i] = newArray[j];
//             newArray[j] = temp;
//         }
//     }
// }

// console.log(newArray);

