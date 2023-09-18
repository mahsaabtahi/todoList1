'use strict'
const btn=document.querySelector('.btn');
const input=document.getElementById('myInput');
const list =document.getElementById('list')



const addText=function(){
    let textInput=input.value;
    if(textInput.trim() !==''){
        list.classList.remove('hidden')
        list.innerHTML+=`
       <div class="text">
            <span>
                ${textInput} 
            </span>
      </div>`
    }else{
        alert('Please enter a text!')
    }
}

btn.addEventListener('click',addText)
