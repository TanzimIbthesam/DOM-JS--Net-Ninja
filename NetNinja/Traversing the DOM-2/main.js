const booklist=document.querySelector('#booklist');
console.log('Booklist next sibling is',booklist.nextSibling);
console.log('Booklist next sibling is',booklist.nextElementSibling);
console.log('Booklist previous sibling is',booklist.previousSibling);
console.log('Booklist previoussibling is',booklist.previousElementSibling);
//console.log(booklist.children);
//To add text to the previous element
booklist.previousElementSibling.querySelector('h2').innerHTML +='<br>The guy is too cool';