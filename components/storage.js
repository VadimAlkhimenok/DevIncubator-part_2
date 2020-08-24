export const localstorageTasks = () => {
    let ul = currentTasks.querySelectorAll('li');

    let taskData = [...ul].map(li => ({
        title: li.querySelector('.title').textContent,
        text: li.querySelector('.text').textContent,
        priority: li.querySelector('.priority').textContent,
        date: li.querySelector('.date').textContent,
    }));

    localStorage.setItem('tasks', JSON.stringify(taskData));
};