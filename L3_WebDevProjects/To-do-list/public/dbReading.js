// get functionality
async function getTask() {
    try {
        const { data } = await axios.get('/api/v1/tasks');
        for (key in data.data.tasks) {
            createTask(data.data.tasks[key].name, key, data.data.tasks[key]);
        }
    } catch (error) {
        console.error(error);
    }
}

// post functionality
async function postTask(taskName) {
    try {
        await axios({
            method: 'post',
            url: '/api/v1/tasks',
            data: {
                name: taskName,
                completed: false,
            }
        });
        const { data } = await axios.get('/api/v1/tasks');
        createTask(data.data.tasks[lastTaskNumber].name, lastTaskNumber, data.data.tasks[lastTaskNumber]);
    } catch (error) {
        console.error(error);
    }
}


// deleting an element
async function deleteTask(taskId) {
    try {
        const { data } = await axios.get('/api/v1/tasks');
        for (key in data.data.tasks) {
            if (data.data.tasks[key]._id == taskId) {
                frontEndElementRemover(key)
                break;
            }
        }
        await axios({
            method: 'delete',
            url: '/api/v1/tasks/' + taskId,
            data: {
                name: taskName,
                completed: false,
            }
        });
        lastTaskNumber--;
    } catch (error) {
        console.error(error);
    }
}

// UPDATING A TASK
async function updateTask(taskId, taskUpdate = false) {
    try {
        await axios({
            method: 'patch',
            url: '/api/v1/tasks/' + taskId,
            data: {
                completed: taskUpdate,
            }
        });
    } catch (error) {
        console.error(error);
    }
}


getTask();