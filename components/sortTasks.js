const sort = () => {
    let UL = document.querySelector('#currentTasks');
    let arrUL = [...UL.querySelectorAll('li')];
    let sortArrUL = arrUL.sort().reverse();
    sortArrUL.forEach(li => currentTasks.insertAdjacentElement('beforeend', li));
};

export const sortTasks = () => {

    btn_increase.disabled = true;

    btn_increase.addEventListener('click', () => {
        btn_increase.disabled = true;
        sort();
        btn_decrease.disabled = false;
    });
    btn_decrease.addEventListener('click', () => {
        btn_decrease.disabled = true;
        sort();
        btn_increase.disabled = false;
    });
} 