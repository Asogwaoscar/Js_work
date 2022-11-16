let addToDoButton = document.getElementById('addToDo');
let toDoConatainer = document.getElementById('toDocontainer');
let inputField = document.getElementById('inputField');

//adding an event to the list
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoConatainer.appendChild(paragraph);
    inputField.value ="";

    //striking a line to indicate worked data
    paragraph.addEventListener('click', function(){
     paragraph.style.textDecoration = "line-through";

    })
    //double click removes the particular data from the list
paragraph.addEventListener('dblclick', function(){
    toDoConatainer.removeChild(paragraph);
})
})