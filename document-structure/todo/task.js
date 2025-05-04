document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask();
    });

    function addTask() {
        const taskText = input.value.trim();
        
        if (taskText) {
            const task = document.createElement('div');
            task.className = 'task';
            
            const taskTitle = document.createElement('div');
            taskTitle.className = 'task__title';
            taskTitle.textContent = taskText;
            
            const taskRemove = document.createElement('a');
            taskRemove.className = 'task__remove';
            taskRemove.href = '#';
            taskRemove.innerHTML = '&times;';
            
            taskRemove.addEventListener('click', function(e) {
                e.preventDefault();
                task.remove();
            });
            
            task.appendChild(taskTitle);
            task.appendChild(taskRemove);
            
            tasksList.appendChild(task);
            
            input.value = '';
        }
    }
});