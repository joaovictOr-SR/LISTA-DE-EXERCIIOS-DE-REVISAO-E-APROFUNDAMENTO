// João Victor Santos Ruas

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(taskItem => {
            tasks.push({
                text: taskItem.querySelector('span').textContent,
                completed: taskItem.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTaskToDOM(taskText, completed = false) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const completeButton = document.createElement('button');
        completeButton.textContent = '✓';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
            saveTasks();
        });
        li.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✗';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            li.remove();
            saveTasks();
        });
        li.appendChild(deleteButton);

        if (completed) {
            li.classList.add('completed');
        }

        taskList.appendChild(li);
        saveTasks();
    }

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTaskToDOM(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    loadTasks();
});
