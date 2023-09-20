'use strict'
const btn=document.querySelector('.btn');
const input=document.getElementById('myInput');
const list =document.getElementById('list')

const saveLocalStorage=function(){
    localStorage.setItem('todoData',list.innerHTML);
}
const getLocalStorage=function(){
    const data=localStorage.getItem('todoData')
    list.innerHTML=data;
}


btn.addEventListener('click',function(e){
    e.preventDefault();
    let text =input.value;
    console.log(list.innerHTML);
    if(text.trim() !==''){
        list.classList.remove('hidden')
        list.innerHTML+=`
          <li class="text">
              ${text} 
          </li>`;
     
    }else{
        alert('Please enter a text!')
    }
    input.value="";
    saveLocalStorage();
 
   
})
getLocalStorage()