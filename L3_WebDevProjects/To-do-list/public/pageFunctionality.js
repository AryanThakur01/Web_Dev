let lastTaskNumber = 0;

let frontEndElementRemover = async (elementCount) => {
    document.getElementsByClassName('task')[elementCount].remove();
}

let createTask = (name, elementNumber, taskJson = { _id: "#" }) => {
    document.querySelector('.container').insertAdjacentHTML("beforeend", `
    <div class='task' value='${elementNumber}'>
        <div class="check-box-container">
            <input class="checkbox" type="checkbox" name="taskName">
            <span class="checkmark"></span>
            <div>${name}</div>
        </div>
        <div>
            <button class="edit-del delete" value="${taskJson._id}"><img src="./icons8-trash-30.png" alt="delete"></button>
        </div>
    </div>`)
    // select the element to add functionality
    let selectCheckbox = document.querySelectorAll('.checkbox')[elementNumber];
    let taskContainer = document.querySelectorAll('.task')[elementNumber];

    // seperate if task is done
    if (taskJson.completed) {
        selectCheckbox.checked = true;
        taskContainer.style.opacity = '0.3';
    }

    // add the click event on all the tasks
    selectCheckbox.addEventListener('click', () => {
        if (selectCheckbox.checked) {
            taskContainer.style.opacity = '0.3';
        }
        else {
            taskContainer.style.opacity = '1';
        }
    })

    console.log(taskJson);
    // deleting a task
    let removeTask = document.querySelectorAll('.delete')[elementNumber];
    removeTask.addEventListener('click', () => {
        deleteTask(taskJson._id);
    })
    lastTaskNumber++
}




let taskCreator = document.getElementById('taskCreator')
let taskName = document.getElementById('addTask');

taskCreator.addEventListener('click', () => {
    if ((taskName.value).trim() != '') {
        postTask((taskName.value).trim());
    }
    else {
        document.querySelector('.upload-remark').innerHTML = 'Can\'t add an empty task';
        document.querySelector('.upload-remark').style.color = 'orangered';
        setTimeout(() => {
            document.querySelector('.dataSaved').innerHTML = ``;
        }, 2000);
    }
    taskName.value = ''
})

// Add the click functionality of createTask on input container
taskName.addEventListener('keypress', () => {
    if (event.key == "Enter")
        taskCreator.click();
})

document.getElementById('save').addEventListener('click', () => {
    for (let i = 0; i < lastTaskNumber; i++) {
        updateTask(document.querySelectorAll('.delete')[i].value, document.querySelectorAll('.checkbox')[i].checked)
    }
    document.querySelector('.dataSaved').innerHTML = `Data Saved Successfully`;
    document.querySelector('.dataSaved').style.color = 'lightgreen';
    setTimeout(() => {
        document.querySelector('.dataSaved').innerHTML = ``;
    }, 2000);
})


