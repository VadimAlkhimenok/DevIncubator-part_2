import { setResetForm, setResetCheckbox } from './form.js';

export const resetData = () => {
    btn_close.addEventListener('click', () => {
        setResetCheckbox();
        setResetForm();
    });

    document.body.addEventListener('click', event => {
        if (event.target.id === 'exampleModal') {
            setResetCheckbox();
            setResetForm();
        };
    });

    document.querySelector('.close').addEventListener('click', event => {
        setResetCheckbox();
        setResetForm();
    })
};