// declare varibels to access element using dom
let text = document.getElementById('inputTask');
let btnAdd= document.getElementById('btnAdd');
let divList=document.getElementById('todoList');
let section,para,edit,del;
let complete;

// dark and light for page 2
let header=document.querySelector('h3')
let body2=document.querySelector('body')
let dark=document.querySelector('.dark');
let light = document.querySelector('.light')

dark.onclick= function(){
    body2.classList.add('darkMode');
    header.classList.add('header');
    dark.style.color='#fff';
    light.style.color='#fff'
}

light.onclick=function(){
    body2.classList.remove('darkMode');
    header.classList.remove('header');
    dark.style.color='#000';
    light.style.color='#000'    

}


btnAdd.onclick= addList;

// declare array to store the input value on it
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));


//define add function to add input value on local storage and appear on page
function addList(event){
    if(text.value == ''){
        alert('Plaese Enter your task');
    }else{
        event.preventDefault();

        section=document.createElement('section');
        section.setAttribute('class','list');
    
        para=document.createElement('p');
        para.textContent= text.value;
        para.setAttribute('calss',"paraText")
        para.style.width='60%'
 
    del = document.createElement('i');
    del.setAttribute('class', 'del far far fa-trash-alt');
    del.setAttribute('onclick', 'del2(event)');

        complete=document.createElement('i');
        complete.setAttribute('class','fas fa-check');
        complete.setAttribute('onclick','completeTask(event)');        

        edit = document.createElement('i');
        edit.setAttribute('class','editIcon far fa-edit');
    
        edit.setAttribute("onclick","edit2(event)")
    
        section.appendChild(para)
        section.appendChild(complete)
        section.appendChild(edit)
        section.appendChild(del)
        divList.appendChild(section); 
    
        itemsArray.push(text.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        document.querySelector("#inputTask").value = "" 
    }    
                 
}

//we need this function when the user complete his task
function completeTask(event){
    let comp=event.target.parentNode.textContent;
    itemsArray.splice(itemsArray.indexOf(comp), 1); 
    localStorage.setItem('items',JSON.stringify(itemsArray))
    event.target.parentNode.firstChild.style.textDecoration='line-through';
    event.target.parentNode.firstChild.style.fontSize='20px';
    event.target.parentNode.style.backgroundColor = 'rgb(55 55 59)'  
    event.target.parentNode.style.color ='#8bc34a'   
}


  


//  edit start
function edit2(event){
    let value = event.target.parentNode.textContent
    window.value = value
    console.log(event.target.parentNode);
    event.target.parentNode.setAttribute("contenteditable","true")
    let check = document.createElement("i")
    event.target.parentNode.appendChild(check)
    check.setAttribute("class","fas fa-check")
    check.setAttribute("onclick","submit(event)")
}
function submit (event){
    console.log(event.target.parentNode.firstChild);
    event.target.parentNode.firstChild.setAttribute("contenteditable","false")
    text.value= event.target.parentNode.firstChild.textContent
    itemsArray.splice(itemsArray.indexOf(value), 1,text.value); 
    localStorage.setItem('items', JSON.stringify(itemsArray));
    document.querySelector("#inputTask").value = "" 
    event.target.remove()
}

//delete function
function del2(event){
    let value = event.target.parentNode.textContent
    itemsArray.splice(itemsArray.indexOf(value), 1); 
    localStorage.setItem('items',JSON.stringify(itemsArray))
    event.target.parentNode.remove()
}
