const list=document.querySelector("#booklist ul");
list.addEventListener('click',function(e){
if(e.target.className=='delete'){
    const li=e.target.parentElement;
    list.removeChild(li)
}
});
const addForm=document.forms['addbook'];
addForm.addEventListener('submit',function(e){
e.preventDefault();
const value=addForm.querySelector('input[type="text"]').value;
//create elements
const li=document.createElement('li');
const bookName=document.createElement('span');
const deleteBtn=document.createElement('span');
//add content
deleteBtn.textContent='delete';
bookName.textContent=value;
//append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
});
//Something wrong of delete button

