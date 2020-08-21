import { getDataForm, setFocus } from './form.js';
import { getCurrentDate } from './date.js';
import { counterCurrentTasks } from './counterTasks.js';
import { setColorTask } from './colorTask.js';
import { localstorageTasks } from './storage.js';

export const templateTask = () => {
    currentTasks.insertAdjacentHTML('beforeend', `
        <li class="list-group-item d-flex w-100 mb-2 parents" style="background: ${ setColorTask().background }; color: ${ setColorTask().color }">
            <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 title">${ getDataForm().title }</h5>
                    <div>
                        <small class="mr-2 priority">${ getDataForm().priority }</small>
                        <small class="date">${ getCurrentDate() }</small>
                    </div>
                </div>
                <p class="mb-1 w-100 text">${ getDataForm().text }</p>
            </div>
            <div class="dropdown m-2 dropleft">
                <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1" style="background: ${ setColorTask().background }">
                    <button type="button" class="btn btn-success w-100" id="btn_complete">Complete</button>
                    <button type="button" class="btn btn-info w-100 my-2" id="btn_edit">Edit</button>
                    <button type="button" class="btn btn-danger w-100" id="btn_delete">Delete</button>
                </div>
            </div>
        </li>
    `);

    btn_close.click();
};

export const addTask = () => {
    btn_add.addEventListener('click', event => {
        if (getDataForm().title !== '' && getDataForm().text !== '' && getDataForm().priority !== null)
            templateTask();

        localstorageTasks();
        counterCurrentTasks();
    });
};