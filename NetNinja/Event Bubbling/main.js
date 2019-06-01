const list=document.querySelector("#booklist ul");
list.addEventListener('click',function(e){
if(e.target.className=='delete'){
    const li=e.target.parentElement;
    list.removeChild(li)
}
});