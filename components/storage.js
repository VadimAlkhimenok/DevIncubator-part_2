export const saveTasksUser = tasks => {
    let ul = currentTasks.querySelectorAll('li');

    [...ul].map(li => (
        tasks.push({
            counter:  li.dataset.id,
            background: li.style.background,
            color: li.style.color,
            title: li.querySelector('.title').textContent,
            text: li.querySelector('.text').textContent,
            priority: li.querySelector('.priority').textContent,
            date: li.querySelector('.date').textContent,
        })
    ));    
}; 


const isTaskCheck = task => {
    let tmpArr = [];
    return (tmpArr.indexOf(task.age) === -1) ? tmpArr.push(task.age) : false;
} 

export const filterTasks = tasks => {
    
    tasks.filter((task) => {
        isTaskCheck(task);
    });

    console.log('tasks: ', tasks);
}


