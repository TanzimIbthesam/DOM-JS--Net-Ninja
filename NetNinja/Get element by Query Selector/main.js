//const b=document.querySelector('#booklist');
//const a=document.querySelector('#booklist li:nth-child(3).name');
//console.log(a);
//When we use query selector it only retuens one single element
var book=document.querySelector('#booklist li.name');
//For selecting all elements with similar class name
 book=document.querySelectorAll('#booklist li.name');
//console.log(a);
Array.from(book).forEach(function(book){
console.log(book);
});

//const a=document.querySelector('#demo');
//const a=document.querySelector('#booklist li:nth-child(2).name');
//console.log(a);
//const headingtitle=document.querySelector('#title');
// const heading=document.querySelector('.box');
// console.log(heading);