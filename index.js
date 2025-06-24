let array = [1,2,3,4,5];
let result = ""
for(let i=0;i<array.length;i++){
    if(array[i] % 2 != 0){
        result = result + array[i] + " "
    }
}

console.log(result);

let array = [1,2,3,4,5];
let sum = 0;

for(let i=0;i<array.length;i++){
    if(i % 2 !== 0){
        sum = sum + array[i]
    }
}

console.log(sum);

let array = [2,5,7,2,8,4,2,3];
let num = 2;

for(let i=0;i<array.length;i++){
    if(array[array.length - i - 1] === num){
        console.log(array.length - i - 1);
        break;
    }
}


let array = [1,4,6,3,10];
let result = ""
for(let i=0;i<array.length;i++){
    if(i % 2 === 0){
        result = result + array[i] + " "
    }
}

console.log(result)


