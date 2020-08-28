import { runLoading } from "../loader.js";
import { saveDataNewUser, getDataUser } from "../data.js";
import { setFocus } from "../modalAddTasks.js";
import { isEmptyInput, isCorrectEmail, isCorrectPassword, isFoundUser } from "./checkAuth.js";
import { resetTheme } from "../theme.js";
import { isEmptyInputRegistr, isCorrectPasswordReg } from "./checkRegistr.js";
import { saveTasksUser, filterTasks } from "../storage.js";
import { counterCurrentTasks } from "../counterTasks.js";

const btns = document.querySelectorAll('button');
const main__text_tasks = document.querySelector('#main__text_tasks');


const addElement = (element, className) => {
    element.classList.add(className);
}

const removeElement = (element, className) => {
    element.classList.remove(className);
}

const setBtnDislabled = () => {
    btns.forEach(btn => {
        if (btn !== btn__signIn) addElement(btn, 'hide');
    })
}

const deleteLoader = () => {
    document.querySelector('.loader').remove();
}

const deleteBtnDislabled = () => {
    btns.forEach(btn => {
        if (btn !== btn__signIn) removeElement(btn, 'hide');
    })
}

const deleteFormAuth = () => {
    if (document.querySelector('.form__wrap')) document.querySelector('.form__wrap').remove();
    else null;
}

const deleteFormRegistr = () => {
    if (document.querySelector('.form__wrap')) document.querySelector('.form__wrap').remove();
    else null;
}

const deleteIntro = () => {
    document.querySelector('.intro').remove();
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
        <div class="form__wrap">
            <form class="form" id="form__auth">
                <h3 class="form__name">Login ToDo</h2>
                <div class="form__title">
                    <span class="form__title-email">
                        Email
                    </span>
                </div>
                <div class="form__input">
                    <input class="input" type="email" id="email">
                </div>

                <div class="form__title">
                    <span class="form__title-password">
                        Password
                    </span>
                </div>
                
                <div class="form__input">
                    <input class="input" type="password" id="password">
                </div>
                
                <span class="hide" id="emptyInputs">
                    Data cannot be empty.
                </span>    
                <span class="hide" id="correctEmail">
                    The user isn't registered.
                </span>     
                <span class="hide" id="correctPassword">
                    Incorrect password.
                </span>           

                <div class="btns__confirm">
                    <button class="btn btn-success" id="btn__in">
                        <span class="spinner-border spinner-border-sm hide" role="status" aria-hidden="true"></span>
                        Confirm
                    </button>
                    <button class="btn btn-danger" id="btn__up">Register</button>
                </div>
            </form>
        </div>
    `)
}

const showRegistrForm = () => {
    btn__up.addEventListener('click', () => {
        main__text.insertAdjacentHTML('beforeend', `
            <div class="form__wrap">
                <form class="form" id="form__registr" method="">
                    <h3 class="form__name">Registr</h2>
                    <div class="form__title">
                        <span class="form__title-username">
                            Name
                        </span>
                    </div>
                    <div class="form__input">
                        <input type="text" class="form-control" id="nameReg" aria-describedby="emailHelp">
                    </div>
                    <div class="form__title">
                        <span class="form__title-email">
                            Email
                        </span>
                    </div>
                    <div class="form__input">
                        <input type="email" class="form-control" id="emailReg" aria-describedby="emailHelp">
                    </div>
                    
                    <div class="form__title">
                        <span class="form__title-password">
                            Password
                        </span>
                    </div>

                    <div class="form__input">
                        <input type="password" class="form-control" id="passwordReg">
                    </div>

                    <div class="form__title">
                        <span class="form__title-passwordReg">
                            Repeat password
                        </span>
                    </div>

                    <div class="form__input">
                        <input type="password" class="form-control" id="repeat__passwordReg">
                    </div>

                    <span class="hide" id="emptyInputsReg">
                        Data cannot be empty.
                    </span>    
                    <span class="hide" id="correctEmailReg">
                        Incorrect email.
                    </span>     
                    <span class="hide" id="correctPasswordReg">
                        Password mismatch.
                    </span>      

                    <div class="btns__confirm">
                        <button class="btn btn-success" id="btn__registr">
                            <span class="spinner-border spinner-border-sm hide" role="status" aria-hidden="true"></span>
                            Confirm
                        </button>
                    </div>
                </form>
            </div>  
        `)
        deleteFormAuth();
    })
}

const getDataAuth = () => ({
    email: document.forms["form__auth"]["email"].value,
    password: document.forms["form__auth"]["password"].value,
})

export let dataProfileUser;
let counter = 0;
const submitDataAuth = () => {
    btn__in.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector('.spinner-border').classList.remove('hide');

        // get data user next
        dataProfileUser = Object.assign({}, getDataUser(getDataAuth().email));
        
        
        setTimeout(() => {
            document.querySelector('.spinner-border').classList.add('hide');
            logInApp();

            // get data user next
            saveTasksUser(dataProfileUser.tasks);
            btn__profile_name.textContent = dataProfileUser.name;
            // dataProfileUser.tasks.map( task => {
            //     currentTasks.insertAdjacentHTML('beforeend', `
            //         <li class="list-group-item d-flex w-100 mb-2 parents task" data-id=${ counter++ } style="background: ${ task.background }; color: ${ task.color }; cursor: all-scroll" draggable="true">
            //             <div class="w-100 mr-2">
            //                 <div class="d-flex w-100 justify-content-between">
            //                     <h5 class="mb-1 title">${ task.title }</h5>
            //                     <div>
            //                         <small class="mr-2 priority">${ task.priority }</small>
            //                         <small class="date">${ task.date }</small>
            //                     </div>
            //                 </div>
            //                 <p class="mb-1 w-100 text">${ task.text }</p>
            //             </div>
            //             <div class="dropdown m-2 dropleft">
            //                 <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                     <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
            //                 </button>
            //                 <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1" style="background: ${ task.background }">
            //                     <button type="button" class="btn btn-success w-100" id="btn_complete">Complete</button>
            //                     <button type="button" class="btn btn-info w-100 my-2" id="btn_edit">Edit</button>
            //                     <button type="button" class="btn btn-danger w-100" id="btn_delete">Delete</button>
            //                 </div>
            //             </div>
            //         </li>
            //     `);
            // } )
        }, 1000);
    })
}

const resetDataAuth = () => ({
    email: document.forms["form__auth"]["email"].value = '',
    password: document.forms["form__auth"]["password"].value = '',
});

const logInApp = () => {
    if ( isEmptyInput(getDataAuth().email, getDataAuth().password) ) {
        removeElement(emptyInputs, 'hide');
        addElement(emptyInputs, 'invalid');
        removeElement(email, 'hide');
        addElement(email, 'invalid');
        addElement(password, 'invalid');
        document.querySelectorAll('.form__title').forEach(el => el.classList.add('invalid'));
    } 

    if ( isFoundUser(getDataAuth().email) ) {
        if ( !isCorrectEmail(getDataAuth().email) ) {
            removeElement(correctEmail, 'hide');
            addElement(correctEmail, 'invalid');
            removeElement(email, 'hide');
            addElement(email, 'invalid');
            addElement(document.querySelector('.form__title'), 'invalid');
        }
        else if ( isCorrectPassword(getDataAuth().password, getDataAuth().email) ) {
            runLoading();
            deleteFormAuth();
            setTimeout(() => {
                deleteLoader();
                deleteBtnDislabled();
                removeElement(main__text_tasks, 'hide');
                setFocus();
            }, 1000);
        }
        else {
            document.querySelectorAll('.form__title')[1].classList.add('invalid');
            addElement(password, 'invalid');
            removeElement(correctPassword, 'hide');
            addElement(correctPassword, 'invalid');
        }
    } 
    else {
        removeElement(correctEmail, 'hide');
        addElement(correctEmail, 'invalid');
        removeElement(email, 'hide');
        addElement(email, 'invalid');
        addElement(document.querySelector('.form__title'), 'invalid');
    }
}

export const authorization = () => {

    showIntro();
    setBtnDislabled();

    auth.addEventListener('click', event => {
        if (event.target.id === 'btn__signIn') {
            runLoading();
            addElement(btn__signIn, 'hide');
            removeElement(btn__signOut, 'hide');
            deleteIntro();
            
            setTimeout(() => {
                showLogin();
                submitDataAuth();
                resetDataAuth().email;
                resetDataAuth().password;
                showRegistrForm();
                // registration
                registration();
                deleteLoader();
            }, 1000);
        }

        if (event.target.id === 'btn__signOut') {
            // get data user next
            document.querySelectorAll('li').forEach(li => li.remove());
            counterCurrentTasks();

            runLoading();
            deleteFormAuth();
            addElement(btn__signOut, 'hide');
            removeElement(btn__signIn, 'hide');
            setBtnDislabled();
            addElement(main__text_tasks, 'hide');
            resetTheme();
            
            setTimeout(() => {
                deleteLoader();
                showIntro();
            }, 1000);
        }
    })

};

// registration

export const getDataFormRegistr = () => ({
    name: document.forms["form__registr"]["nameReg"].value,
    email: document.forms["form__registr"]["emailReg"].value,
    password: document.forms["form__registr"]["passwordReg"].value,
    repeatPassword: document.forms["form__registr"]["repeat__passwordReg"].value,
    tasks: [],
})

const checkInputDataRegistr = () => {

    let dataFormRegistr = {
        name: getDataFormRegistr().name,
        email: getDataFormRegistr().email,
        password: getDataFormRegistr().password,
        repeatPassword: getDataFormRegistr().repeatPassword,
    }
    
    if ( isEmptyInputRegistr(dataFormRegistr) ) {
        removeElement(emptyInputsReg, 'hide');
        addElement(emptyInputsReg, 'invalid');
        addElement(nameReg, 'invalid');
        removeElement(emailReg, 'hide');
        addElement(emailReg, 'invalid');
        addElement(passwordReg, 'invalid');
        addElement(repeat__passwordReg, 'invalid');
        document.querySelectorAll('.form__title').forEach(el => el.classList.add('invalid'));
    } 

    if ( isFoundUser(dataFormRegistr.email) ) {
        console.log('email is busy!');
        removeElement(correctEmailReg, 'hide');
        addElement(correctEmailReg, 'invalid');
        removeElement(emailReg, 'hide');
        addElement(emailReg, 'invalid');
        addElement(document.querySelector('.form__title-email'), 'invalid');
    }
    else {
        if ( !isCorrectEmail(dataFormRegistr.email) ) {
            removeElement(correctEmailReg, 'hide');
            addElement(correctEmailReg, 'invalid');
            removeElement(emailReg, 'hide');
            addElement(emailReg, 'invalid');
            addElement(document.querySelector('.form__title-email'), 'invalid');
        }
        else if ( !isCorrectPasswordReg(dataFormRegistr) ) {
            addElement(passwordReg, 'invalid');
            removeElement(correctPasswordReg, 'hide');
            addElement(correctPasswordReg, 'invalid');
            addElement(document.querySelector('.form__title-password'), 'invalid');
            addElement(repeat__passwordReg, 'invalid');
            addElement(document.querySelector('.form__title-passwordReg'), 'invalid');
        }
        else {
            saveDataNewUser();
            runLoading();
            deleteFormRegistr();
            setTimeout(() => {
                deleteLoader();
                showLogin();
                submitDataAuth();
                main__text.insertAdjacentHTML('beforeend', `
                    <p class="alert alert-success" role="alert" id="message">
                        User added successfuly!
                    </p>
                `);
            }, 1000);
            setTimeout(() => {
                message.remove();
            }, 5000);
        }
    }
}

const registration = () => {
    btn__up.addEventListener('click', event => {
        btn__registr.addEventListener('click', event => {
            event.preventDefault();

            document.querySelector('.spinner-border').classList.remove('hide');
            setTimeout(() => {
                document.querySelector('.spinner-border').classList.add('hide');
                checkInputDataRegistr();
            }, 1000);

        })
    })
}