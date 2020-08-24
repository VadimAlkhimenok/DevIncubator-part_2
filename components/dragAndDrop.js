import { counterCurrentTasks, counterCompletedTasks } from "./counterTasks.js";
import { deleteBtnAfterCompleted, appendBtnAfterReturnInCurrent } from "./taskProperties.js";

function dragStart(event) {
    this.classList.add('opacity');
    event.dataTransfer.setData("text/plain", event.target.dataset.id);
}

function dragEnd() {
    this.classList.remove('opacity');
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.classList.add('hovered');
}

function dragLeave() {
    this.classList.remove('hovered');
}


export const dragAndDropCompleted = () => {
    const curntTasks = document.querySelectorAll('.task');
    const complTask = document.querySelector('.completed-tasks');

    function dragDrop(event) {
        let curTaskById = document.querySelector(`[data-id="${event.dataTransfer.getData("text/plain")}"]`)
        complTask.append(curTaskById);
        this.classList.remove('hovered');

        counterCurrentTasks();
        counterCompletedTasks();
        deleteBtnAfterCompleted();
    }

    curntTasks.forEach(curTask => {
        curTask.addEventListener("dragstart", dragStart);
        curTask.addEventListener("dragend", dragEnd);
    })

    complTask.addEventListener("dragover", dragOver);
    complTask.addEventListener('dragenter', dragEnter);
    complTask.addEventListener("dragleave", dragLeave);
    complTask.addEventListener("drop", dragDrop);
}

export const dragAndDropCurrent = () => {
    const complTasks = document.querySelectorAll('.task');
    const curntTask = document.querySelector('.current-tasks');

    function dragDrop(event) {
        let curTaskById = document.querySelector(`[data-id="${event.dataTransfer.getData("text/plain")}"]`)
        curntTask.append(curTaskById);
        this.classList.remove('hovered');

        counterCurrentTasks();
        counterCompletedTasks();
        appendBtnAfterReturnInCurrent();
    }

    complTasks.forEach(complTask => {
        complTask.addEventListener("dragstart", dragStart);
        complTask.addEventListener("dragend", dragEnd);
    })

    curntTask.addEventListener("dragover", dragOver);
    curntTask.addEventListener('dragenter', dragEnter);
    curntTask.addEventListener("dragleave", dragLeave);
    curntTask.addEventListener("drop", dragDrop);
}