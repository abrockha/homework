
//get the element id for the button and attaches a function to it.
document.getElementById('add').onclick = function(){

    //gets the element id for the textbox and the value that is inside of it only after the button is clicked.
    let text = document.getElementById('toDo').value;

    //used to create a new li element once called.
    let newLI = document.createElement('li');

    //assigns the text within the textbox to the new li element being created.
    newLI.innerHTML = text;

    //finds the unordered list by element id and adds a new child (li) to it.
    document.getElementById("list").appendChild(newLI);

    //resets the value of the textbox to an empty set.
    document.getElementById('toDo').value = "";
}
//adds an event listener to the unordered list.
document.getElementById('list').addEventListener('click', function(e){

    //e.target is the element that is clicked, and this adds a strikethrough on that element.
    e.target.style.textDecoration = 'line-through';

    //puts a delay on removing the element from the list the numeric value is in milliseconds so 1000 ms = 1s.
    setTimeout(() => {  e.target.remove(); }, 1000);
    
})