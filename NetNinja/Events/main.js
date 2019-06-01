var btns=document.querySelectorAll('#booklist .delete');
Array.from(btns).forEach(function(btn){
btn.addEventListener('click',function(e){
const li=e.target.parentElement;
li.parentNode.removeChild(li);

});
});
const link=document.querySelector('#pagebanner a');
link.addEventListener('click',function(e){
e.preventDefault();
console.log('Navigation to',e.target.textContent,'was prevented');
});

// var btns=document.querySelectorAll('#booklist.delete');

// Array.from(btns).forEach(function(btn){
// btn.addEventListener('click',function(e){
//     const lil=e.target;
//     lil.parentNode.removeChild(li)
// });
// });
// var h2=document.querySelector('#booklist h2');
// h2
// <h2>​The list of Books are as follows​</h2>​
// h2.addEventListener('click',function(e){
// console.log(e.target);
// console.log(e);
// });