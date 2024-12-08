function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;

    if (taskValue.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new task item
    const listItem = document.createElement('li');
    listItem.className = 'flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-lg';

    // Create checkbox and label
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;
    taskText.className = 'text-lg';

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.className = 'mr-3';
    taskCheckbox.addEventListener('click', function () {
        if (this.checked) {
            taskText.classList.add('line-through', 'text-gray-500');
        } else {
            taskText.classList.remove('line-through', 'text-gray-500');
        }
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.className = 'text-red-500 font-bold';
    deleteBtn.onclick = function () {
        taskList.removeChild(listItem);
    };

    // Append checkbox, task text, and delete button to the list item
    listItem.appendChild(taskCheckbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);

    // Add the new task to the list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
}
