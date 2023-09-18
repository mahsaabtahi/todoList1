'use strict'
const btn=document.querySelector('.btn');
const input=document.querySelector('#myInput');
const form =document.querySelector('form');

let savedText=[];
const addText=function(){
    if(input.value.trim() !=''){
        let inputText=input.value;
        savedText.push(inputText);
        savedText.forEach(text=>{
            const html=`<ul id="myList">${text}</ul>`;
            form.insertAdjacentHTML('afterend',html);
    
        })
       
        // const li=document.createElement('li');
        // li.innerText=input.value;
        // list.appendChild(li);
    }
}
btn.addEventListener('click',addText)