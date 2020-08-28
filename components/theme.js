export const chooseTheme = () => {
    btn_choose.addEventListener('click', () => {
        document.body.style.background = bgTheme.value;
        document.querySelector('nav').classList.remove('navbar-light', 'bg-light');
        document.querySelector('nav').style.background = bgTheme.value;
        document.querySelector('.modal-content').style.background = bgTheme.value;
    });
};

export const resetTheme = () => {
        document.body.style.background = '';
        document.querySelector('nav').classList.add('navbar-light', 'bg-light');
        document.querySelector('nav').style.background = '';
        document.querySelector('.modal-content').style.background = '';
}
