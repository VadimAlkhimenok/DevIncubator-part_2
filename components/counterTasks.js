const templateCounterTasks = () => {
    currentTasks.insertAdjacentHTML('beforebegin', `<p class="currentTasks">Current tasks: ${ 0 }</p>`);
    completedTasks.insertAdjacentHTML('beforebegin', `<p class="completedTasks">Completed tasks: ${ 0 }</p>`);
};

const counterCurrentTasks = () => {
    let CT = document.querySelector('#currentTasks');
    let currentTasksLength = CT.querySelectorAll('li').length;

    let findCurrentTasks = document.getElementsByTagName('p')[1];

    if (findCurrentTasks) {
        findCurrentTasks.remove();
        currentTasks.insertAdjacentHTML('beforebegin', `<p>Current tasks: ${ currentTasksLength }</p>`);
    };
};

const counterCompletedTasks = () => {
    let CT = document.querySelector('#completedTasks');
    let completedTasksLength = CT.querySelectorAll('li').length;
    let allP = document.getElementsByTagName('p');
    let findCompletedTasks = [...allP].filter(p => p.className === 'completedTasks');

    if (findCompletedTasks) {
        findCompletedTasks.map(p => p.hidden = true)
        completedTasks.insertAdjacentHTML('beforebegin', `<p class="completedTasks">Completed tasks: ${ completedTasksLength }</p>`);
    };
};

export { templateCounterTasks, counterCurrentTasks, counterCompletedTasks };