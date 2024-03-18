const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)"><i class="fas fa-trash-alt"></i></button>
      `;
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  
function deleteTask(element) {
  element.parentElement.remove();
}
