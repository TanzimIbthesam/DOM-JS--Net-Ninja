var a=document.getElementsByClassName('listone');
//To Check whether its an array or not
//console.log(Array.isArray(a));
//How to turn it into an array
//console.log(Array.isArray(Array.from(a)));
Array.from(a).forEach(function(item){
console.log(item);
})