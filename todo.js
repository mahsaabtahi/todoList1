'use strict'
const btn=document.querySelector('.todo-form-btn');
const input=document.querySelector('.todo-form-text');
const list =document.querySelector('.todo-list');

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
    const span='\u00d7';
    if(text.trim() !==''){
        list.classList.remove('hidden')
        
        list.innerHTML+=`
          <li class="todo-list-text">
            ${text}
            <span class="todo-list-span"> ${span} </span>
          </li>`;
        
        
     
    }else{
        alert('Please enter a text!')
    }
    input.value="";
    saveLocalStorage();
 
   
})
getLocalStorage()