/// Q1---- Callback Function

function modifyArray(arr,callback){
    arr.push(100);
    callback();
}

var arr = [5,6,8,112,32,45,84,37,25];

modifyArray(arr,function(){
    console.log("array has been modified",arr)
});


/// Q2---- Reverse whole String

var stringDefine = "Welcome to my YouTube Channel";

var reversedString = stringDefine.split("").reverse().join("");

console.log(reversedString)