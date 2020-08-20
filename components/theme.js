export const chooseTheme = () => {
    btn_choose.addEventListener('click', event => {
        document.body.style.background = bgTheme.value;
        document.querySelector('nav').classList.remove('navbar-light', 'bg-light');
        document.querySelector('nav').style.background = bgTheme.value;
        document.querySelector('.modal-content').style.background = bgTheme.value;
    });
};