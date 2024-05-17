document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskForm = document.getElementById('new-task-form');
    const taskList = document.getElementById('tasks');

    let tasks = [];

    function addTask(task) {
        tasks.push(task);
        renderTasks();
    }

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <span>${task}</span>
                <button data-index="${index}">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = e.target.getAttribute('data-index');
            deleteTask(index);
        }
    });

    renderTasks();
});
