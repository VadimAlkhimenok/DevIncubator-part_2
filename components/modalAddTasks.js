const inputs = document.querySelectorAll('input');
const checkboxs = document.querySelectorAll('.form-check-input');


const setFormPrevent = () => form.addEventListener('submit', event => event.preventDefault());

const setResetCheckbox = () => Array.from(checkboxs).forEach(checkbox => checkbox.checked = false);

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
        }, 1000)
    })
};

const resetData = () => {
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

export { setFormPrevent, setBtnSubmitDisabled, getDataForm, setResetForm, setResetCheckbox, setFocus, resetData };