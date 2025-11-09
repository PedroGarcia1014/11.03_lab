document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const textBox = document.getElementById("newTask");

    if (!addButton || !textBox) {
        console.error("Add button or text box not found.");
        return;
    }

    addButton.addEventListener("click", addBtnClick);

    textBox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
});

function addBtnClick() {
    const textBox = document.getElementById("newTask");
    const newTaskText = textBox.value.trim();

    if (newTaskText !== "") {
        addTask(newTaskText);
        textBox.value = "";
        textBox.focus();
    }
}

function addTask(taskText) {
    const newItem = document.createElement("li");
    newItem.innerHTML = `<span class="task-text">${taskText}</span><button class="done-btn">&#10006;</button>`;

    const taskList = document.querySelector("ol");
    if (!taskList) {
        console.error("Task list not found.");
        return;
    }

    taskList.appendChild(newItem);

    const doneButtons = document.querySelectorAll(".done-btn");
    const lastButton = doneButtons[doneButtons.length - 1];
    lastButton.addEventListener("click", removeTask);
}

function removeTask(event) {
    const li = event.target.parentNode;
    const ol = li.parentNode;
    ol.removeChild(li);
}
