import { runLoading } from "../loader.js";

const btns = document.querySelectorAll('button');

let userData = [];
let data = JSON.parse(localStorage.getItem("users"));

const setBtnDislabled = () => {
    btns.forEach(btn => {
        if (btn !== btn__signIn) btn.classList.add('hide');
    })
}

const showIntro = () => {
    main__text.insertAdjacentHTML('beforeend', `
        <div class="alert alert-success intro" role="alert">
            <h4 class="alert-heading">Hello!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        </div>
    `)
}

const showLogin = () => {
    main__text.insertAdjacentHTML('beforeend', `
        <div class="wrap">
            <form class="form" id="form__auth">
                <h3 class="form__name">Login ToDo</h2>
                <div class="form__title">
                    <span class="form__title-email">
                        Email
                    </span>
                </div>
                <div class="form__input">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                </div>
                
                <div class="form__title">
                    <span class="form__title-password">
                        Password
                    </span>
                </div>

                <div class="form__input">
                    <input type="password" class="form-control" id="password">
                </div>

                <div class="btns__confirm">
                    <button class="btn btn-success" id="btn__in">Confirm</button>
                    <button class="btn btn-danger" id="btn__up">Register</button>
                </div>
            </form>
        </div>
    `)
}

const showRegistrForm = () => {
    btn__up.addEventListener('click', event => {
        event.preventDefault();
        main__text.insertAdjacentHTML('beforeend', `
            <div class="wrap">
                <form class="form" id="form__auth">
                    <h3 class="form__name">Registr</h2>
                    <div class="form__title">
                        <span class="form__title-username">
                            Name
                        </span>
                    </div>
                    <div class="form__input">
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
                    </div>
                    <div class="form__title">
                        <span class="form__title-email">
                            Email
                        </span>
                    </div>
                    <div class="form__input">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
                    </div>
                    
                    <div class="form__title">
                        <span class="form__title-password">
                            Password
                        </span>
                    </div>

                    <div class="form__input">
                        <input type="password" class="form-control" id="password">
                    </div>

                    <div class="form__title">
                        <span class="form__title-password">
                            Repeat password
                        </span>
                    </div>

                    <div class="form__input">
                        <input type="password" class="form-control" id="repeat__password">
                    </div>

                    <div class="btns__confirm">
                        <button class="btn btn-success" id="btn__registr">Confirm</button>
                        <button class="btn btn-warning" id="btn__back">Back</button>
                    </div>
                </form>
            </div>  
        `)
        document.querySelector('.wrap').remove();
    })
}

const getDataAuth = () => ({
    email: document.forms["form__auth"]["email"].value,
    password: document.forms["form__auth"]["password"].value,
})

const submitDataAuth = () => {
    btn__in.addEventListener('click', event => {
        event.preventDefault();
        userData.push({
            email: getDataAuth().email,
            password: getDataAuth().password
        })
        localStorage.setItem("users", JSON.stringify(userData));
        // log in
        runLoading();
        document.querySelector('.wrap').remove();
        setTimeout(() => {
            document.querySelector('.loader').remove();
            btns.forEach(btn => {
                if (btn !== btn__signIn) btn.classList.remove('hide');
            })
            document.querySelector('#main__text_tasks').classList.remove('hide');
        }, 1000);
    })
}

const resetDataAuth = () => ({
    email: document.forms["form__auth"]["email"].value = '',
    password: document.forms["form__auth"]["password"].value = '',
});


export const authorization = () => {

    showIntro();
    setBtnDislabled();

    auth.addEventListener('click', event => {
        if (event.target.id === 'btn__signIn') {
            btn__signIn.classList.add('hide');
            btn__signOut.classList.remove('hide');
            document.querySelector('.intro').remove();
            showLogin();
            getDataAuth();
            submitDataAuth();
            resetDataAuth().email;
            resetDataAuth().password;
            showRegistrForm();
        }

        if (event.target.id === 'btn__signOut') {
            btn__signOut.classList.add('hide');
            btn__signIn.classList.remove('hide');
            setBtnDislabled();
            document.querySelector('#main__text_tasks').classList.add('hide');
            showIntro();
            document.querySelector('.wrap').remove();
        }
    })

};