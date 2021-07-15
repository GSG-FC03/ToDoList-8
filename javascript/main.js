let text = document.getElementById('inputTask');
let btnAdd= document.getElementById('btnAdd');
let divList=document.getElementById('todoList');
let section,para,edit,del;
btnAdd.onclick= addList;

function addList(event){
    event.preventDefault();
    let id=Math.floor(Math.random()*50);

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
    document.getElementById("inputTask").value = '';   

}