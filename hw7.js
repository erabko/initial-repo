// TASK_1 Reverse
let mas = [1,2,3,4,5,6];
mas.reverse();
    
console.log(mas);

// TASK_2 Max in array
let mas = [12,22,13,43,45,16,5];
res = Math.max.apply(null,mas);
console.log(res);

// TASK_3 Fibonaci
let n = 10;
let m = 20;
let fibo = [0, 1];

for (i = 2; i < m; i ++) { 
fibo[i] = fibo[i-1] + fibo[i-2]; 
} 
let ff = fibo.slice(n,m);
console.log(ff);

//TASK_4 Index and item
let num1 = 3487;
num1 = String(num1);
let num2 = 3794;
num2 = String(num2);
let a=0;
let b=0;
let arr1 = Array.from(num1);
let arr2 = Array.from(num2);
console.log(arr1);
console.log(arr2);
    arr2.forEach(function (item,index){
        if (arr2[index]==arr1[index]){a+=1}
        if (arr2[item]==arr1[item])
        {b+=1}
    });
    console.log([a,b-a])

// TASK_5.1 Ascending
let mas = [12,22,13,43,45,16,5];
mas.sort(function(a, b){return a-b}); 
console.log(mas);

// TASK_5.2 Descending
let mas = [12,22,13,43,45,16,5];
mas.sort(function(a, b){return b-a}); 
console.log(mas);

// TASK_6 Remove repeating elements
let mas = [4,5,6,7,4,5,6,4,7,8];
    
let arr1 = mas.filter(function(item, index) {
    return mas.indexOf(item) == index
    });
    console.log(arr1);