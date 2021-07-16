let text = document.getElementById('inputTask');
let btnAdd= document.getElementById('btnAdd');
let divList=document.getElementById('todoList');
let section,para,edit,del;
btnAdd.onclick= addList;

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));

function addList(event){
    event.preventDefault();

    section=document.createElement('section');
    section.setAttribute('class','list');

    para=document.createElement('p');
    para.textContent= text.value;
    para.setAttribute('calss',"paraText")

    edit = document.createElement('i');
    edit.setAttribute('class','editIcon far fa-edit');

    del = document.createElement('i');
    del.setAttribute('class', 'delIcon far far fa-trash-alt');


    
    section.appendChild(para)
    section.appendChild(edit)
    section.appendChild(del)
    divList.appendChild(section); 

    itemsArray.push(text.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    document.querySelector("#inputTask").value = "" 
     

}