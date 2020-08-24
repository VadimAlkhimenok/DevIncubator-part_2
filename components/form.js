const inputs = document.querySelectorAll('input');
const checkboxs = document.querySelectorAll('.form-check-input');

const setFormPrevent = () => form.addEventListener('submit', event => event.preventDefault());

const setBtnSubmitDisabled = () => {
    btn_submit.disabled = true;

    inputs.forEach(input => {
        input.addEventListener('change', event => {
            if (event.target.value !== '') {
                btn_submit.disabled = false;
            };
        });
    });
};

const getDataForm = () => ({
    title: document.forms["form"]["inputTitle"].value,
    text: document.forms["form"]["inputText"].value,
    priority: Low.checked ? 'Low priority' : Medium.checked ? 'Medium priority' : High.checked ? 'High priority' : null,
});

const setResetForm = () => ({
    title: document.forms["form"]["inputTitle"].value = '',
    text: document.forms["form"]["inputText"].value = '',
    priority: false,
});

const setFocus = () => {
    open_modal.addEventListener('click', () => {
        setTimeout(() => {
            document.querySelector('#inputTitle').focus();
        }, 0)
    })
};

const setResetCheckbox = () => Array.from(checkboxs).forEach(checkbox => checkbox.checked = false);

export { setFormPrevent, setBtnSubmitDisabled, getDataForm, setResetForm, setResetCheckbox, setFocus };