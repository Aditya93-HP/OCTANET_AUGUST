document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeBtn = document.createElement('button');
    const completeImg = document.createElement('img');
    completeImg.src = 'https://img.icons8.com/color/48/000000/checked--v2.png'; // New image for Complete
    completeImg.alt = 'Complete';
    completeBtn.appendChild(completeImg);
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
        if (taskItem.classList.contains('completed')) {
            alert('Task completed successfully!');
        }
    });

    const editBtn = document.createElement('button');
    const editImg = document.createElement('img');
    editImg.src = 'https://img.icons8.com/color/48/000000/edit--v2.png'; // New image for Edit
    editImg.alt = 'Edit';
    editBtn.appendChild(editImg);
    editBtn.addEventListener('click', () => {
        const newTaskText = prompt('Edit your task:', taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskSpan.textContent = newTaskText.trim();
            alert('Task edited successfully!');
        }
    });
    const deleteBtn = document.createElement('button');
    const deleteImg = document.createElement('img');
    deleteImg.src = 'https://img.icons8.com/color/48/000000/trash--v2.png'; // New image for Delete
    deleteImg.alt = 'Delete';
    deleteBtn.appendChild(deleteImg);
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this task?')) {
            taskList.removeChild(taskItem);
            alert('Task deleted successfully!');
        }
    });
    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(editBtn);
    taskButtons.appendChild(deleteBtn);
    taskItem.appendChild(taskButtons);
    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskInput.focus();
}
