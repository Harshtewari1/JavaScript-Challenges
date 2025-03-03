function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === "") {
        alert("please enter a task !")
        return;
    }

    const li = document.createElement("li");
    li.innerHTML =
        `<spam>${taskInput.value}</spam>
    <div>
    <button onclick = "completeTask(this)">Yes</button>
    <button onclick = "deleteTask(this)">Delete</button>
    </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

}

function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle('completed');
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}