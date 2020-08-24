import { setResetForm, setResetCheckbox } from './form.js';

export const resetData = () => {
    btn_close.addEventListener('click', () => {
        btn_add.textContent = 'Add task';
        exampleModalLabel.textContent = 'Add task';
        setResetCheckbox();
        setResetForm();
    });

    document.body.addEventListener('click', event => {
        if (event.target.id === 'exampleModal') {
            btn_add.textContent = 'Add task';
            exampleModalLabel.textContent = 'Add task';
            setResetCheckbox();
            setResetForm();
        };
    });

    document.querySelector('.close').addEventListener('click', event => {
        btn_add.textContent = 'Add task';
        exampleModalLabel.textContent = 'Add task';
        setResetCheckbox();
        setResetForm();
    })
};