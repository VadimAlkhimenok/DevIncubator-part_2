export const localstorageTasks = () => {
    let li = currentTasks.querySelectorAll('li');

    let taskData = [...li].map(l => ({
        title: l.querySelector('.title').textContent,
        text: l.querySelector('.text').textContent,
        priority: l.querySelector('.priority').textContent,
        date: l.querySelector('.date').textContent,
        background: bgTask.value,
    }));

    localStorage.setItem('tasks', JSON.stringify(taskData));
};