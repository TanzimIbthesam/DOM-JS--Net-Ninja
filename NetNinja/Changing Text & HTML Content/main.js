
var book=document.querySelector('#booklist li.name');

 book=document.querySelectorAll('#booklist li.name');

Array.from(book).forEach(function(book){
//console.log(book.textContent);
//To append something
book.textContent +='(basic title)';
//To get only text content inside Lis
});

//Text Content and how we can change that
//Inner html
//How to change html element
const booklist=document.querySelector('#booklist');
//console.log(booklist.innerHTML);
//To change the content
booklist.innerHTML='<h2>Names and more names</h2>';
booklist.innerHTML='<p>This is how you add more names</p>';