import { counterCompletedTasks, counterCurrentTasks } from "./counterTasks.js";

const deleteTask = tag => {
    tag.closest('.parents').remove();
};

const completeTask = tag => {
    completedTasks.insertAdjacentElement('beforeend', tag.closest('.parents'));
};

const editTask = tag => {
    open_modal.click();

    btn_add.textContent = 'Save changes';

    let task = tag.closest('.parents');

    let title = task.querySelector('.title').textContent;
    let priority = task.querySelector('.priority').textContent;
    let text = task.querySelector('.text').textContent;

    let inputTitle = document.querySelector('#inputTitle');
    let inputText = document.querySelector('#inputText');

    priority === 'Low priority' ? Low.checked = true : 'Medium priority' ? Medium.checked = true : 'High priority' ? innerHeight.checked = true : null;
    inputTitle.value = title;
    inputText.value = text;

    btn_add.addEventListener('click', event => {
        task.remove();
        counterCurrentTasks();
    })
};

const setBtnDisabled = btn => {
    btn.disabled = true;
};

const deleteBtnAfterCompleted = () => {
    completedTasks.querySelectorAll('#btn_edit, #btn_complete').forEach(btn => btn.remove());
}

export const useTaskProperties = () => {
    currentTasks.addEventListener('click', event => {
        if (event.target.id === 'btn_delete') {
            deleteTask(event.target);
        };

        if (event.target.id === 'btn_complete') {
            completeTask(event.target);

            setBtnDisabled(btn_edit);
            setBtnDisabled(btn_complete);

            counterCompletedTasks();
        };

        if (event.target.id === 'btn_edit') {
            editTask(event.target);
        };

        deleteBtnAfterCompleted();
        counterCurrentTasks();
    });

    completedTasks.addEventListener('click', event => {
        if (event.target.id === 'btn_delete')
            deleteTask(event.target);
        counterCompletedTasks();
    });
};