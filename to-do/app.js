// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Function 

const newDiv = () => {
    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === '') {
        alert('Please enter a task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";
    

    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function(e){
        let target = e.target;
        // target.parentElement.parentElement.remove();
        // Edit 1
        target.parentElement.remove();
    });
}

// Event Lisner

addTask.onclick = newDiv;

