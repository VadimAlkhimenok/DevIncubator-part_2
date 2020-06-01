const inputs = document.querySelectorAll( 'input' );
const checkboxs = document.getElementsByClassName( 'form-check-input' );

form.addEventListener( 'submit', event => event.preventDefault() );

inputs.forEach( input => { 
    input.addEventListener( 'change', event => {
        if ( event.target.value !== '' ) {
            btn_submit.disabled = false;
        };
    } );
} );

const submitHandler = () => ({
    title: document.forms["form"]["inputTitle"].value,
    text: document.forms["form"]["inputText"].value,
    priority: Low.checked ? 'Low priority' : Medium.checked ? 'Medium priority' : High.checked ? 'High priority' : null,
}); 

const resetForm = () => ({
    title: document.forms["form"]["inputTitle"].value = '',
    text: document.forms["form"]["inputText"].value = '',
    priority: false
}); 

const currentDate = () => {
    let today = new Date();
    let date = `${ today.getDate() }.${ today.getMonth() }.${ today.getFullYear() }`;
    let time = `${ today.getHours() }:${ today.getMinutes() }`
    return `${ time } ${ date }`;
};

const resetCheckbox = () => [...checkboxs].forEach( checkbox => checkbox.checked = false );


// add task
const addTask = () => {
    currentTasks.insertAdjacentHTML('beforeend', `
        <li class="list-group-item d-flex w-100 mb-2 parents">
            <div class="w-100 mr-2">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1 title">${ submitHandler().title }</h5>
                    <div>
                        <small class="mr-2 priority">${ submitHandler().priority }</small>
                        <small class="date">${ currentDate() }</small>
                    </div>
                </div>
                <p class="mb-1 w-100 text">${ submitHandler().text }</p>
            </div>
            <div class="dropdown m-2 dropleft">
                <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
                    <button type="button" class="btn btn-success w-100" id="btn_complete">Complete</button>
                    <button type="button" class="btn btn-info w-100 my-2" id="btn_edit">Edit</button>
                    <button type="button" class="btn btn-danger w-100" id="btn_delete">Delete</button>
                </div>
            </div>
        </li>
    `);

    btn_modal.click();
    
};

btn_submit.addEventListener( 'click', event => {
    if ( submitHandler().title !== '' && submitHandler().text !== '' && submitHandler().priority !== null ) {
        addTask();
    };

    if ( document.querySelector( '.dark' ).checked === true ) {
        document.body.querySelectorAll( '.parents' ).forEach( li => li.style.background = 'darkgrey' );
        document.body.querySelectorAll( '.dropdown-menu' ).forEach( menu => menu.style.background = 'darkgrey' );
    };


    currentTasksFunc();
    localstorageTasks()
} );

btn_modal.addEventListener( 'click', () => {
    resetCheckbox();
    resetForm();
} );


// current Tasks
currentTasks.addEventListener( 'click', event => {

    // delete
    if ( event.target.id === 'btn_delete' ) {
        event.target.closest( '.parents' ).remove();
    };

    // complete
    if ( event.target.id === 'btn_complete' ) {
        completedTasks.insertAdjacentElement( 'beforeend', event.target.closest( '.parents' ) );
        btn_edit.disabled = true;
        btn_complete.disabled = true;
        completedTasksFunc();
    };

    // edit
    if ( event.target.id === 'btn_edit' ) {
    };

    // delete completed tasks
    const btn_disabled = completedTasks.querySelectorAll( '#btn_edit, #btn_complete' );
    btn_disabled.forEach( btn => btn.remove() );
    
    currentTasksFunc();

} );


// completed Tasks
completedTasks.addEventListener( 'click', event => {

    // delete
    if ( event.target.id === 'btn_delete' ) {
        event.target.closest( '.parents' ).remove();
    };
    
    completedTasksFunc();

} );


// counter tasks
currentTasks.insertAdjacentHTML( 'beforebegin', `<p>Current tasks: ${ 0 }</p>` );
completedTasks.insertAdjacentHTML( 'beforebegin', `<p class="completedTasksCount">Completed tasks: ${ 0 }</p>` );

const currentTasksFunc = () => {
    let CT = document.querySelector( '#currentTasks' );
    let currentTasksLength = CT.querySelectorAll( 'li' ).length;

    let findCurrentTasks = document.getElementsByTagName( 'p' )[0];
    if ( findCurrentTasks ) {
        findCurrentTasks.remove();
        currentTasks.insertAdjacentHTML( 'beforebegin', `<p>Current tasks: ${ currentTasksLength }</p>` );     
    };
};

const completedTasksFunc = () => {
    let CT = document.querySelector( '#completedTasks' );
    let completedTasksLength = CT.querySelectorAll( 'li' ).length;
    let allP = document.getElementsByTagName( 'p' );
    let findCompletedTasks = [...allP].filter( p => p.className === 'completedTasksCount' );

    if ( findCompletedTasks ) {
        findCompletedTasks.map( p => p.hidden = true )
        completedTasks.insertAdjacentHTML( 'beforebegin', `<p class="completedTasksCount">Completed tasks: ${ completedTasksLength }</p>` );     
    };
};


// increase && decrease tasks
const increase_decrease = () => {
    let UL = document.querySelector( '#currentTasks' );
    let arrUL = [...UL.querySelectorAll( 'li' )];
    let sortArrUL = arrUL.sort().reverse();

    sortArrUL.forEach( li => {
        return currentTasks.insertAdjacentElement( 'beforeend', li );
    } );
};

btn_increase.addEventListener( 'click', () => increase_decrease() );
btn_decrease.addEventListener( 'click', () => increase_decrease() );


// color application
const dropDownMenu = document.querySelector( '.dropdown-menu' );

const chooseTheme = () => {
    let theme = `<label><input class="light" type="radio" checked name="theme"/> White theme</label> 
                 <label><input class="dark" type="radio" name="theme"/> Dark theme</label>`;

    let dropdown = document.querySelector( '.dropdown' );
    dropdown.addEventListener( 'click', event => {

        if ( event.target.className === 'dark' ) {
            document.body.style.background = 'grey';
            document.body.querySelector( 'nav' ).classList.remove( 'navbar-light', 'bg-light' );
            document.body.querySelector( 'nav' ).style.background = 'darkgrey';
            document.body.querySelector( '.modal-content' ).style.background = 'darkgrey';
            document.body.querySelectorAll( '.parents' ).forEach( li => li.style.background = 'darkgrey' );
            document.body.querySelectorAll( '.dropdown-menu' ).forEach( menu => menu.style.background = 'darkgrey' );
        };

        if ( event.target.className === 'light' ) {
            document.body.style.background = '';
            document.body.querySelector( 'nav' ).classList.add( 'navbar-light', 'bg-light' );
            document.body.querySelector( 'nav' ).style.background = '';
            document.body.querySelector( '.modal-content' ).style.background = '';
            document.body.querySelectorAll( '.parents' ).forEach( li => li.style.background = '' );
            document.body.querySelectorAll( '.dropdown-menu' ).forEach( menu => menu.style.background = '' );
        };

    } );

    return theme;
};

dropDownMenu.insertAdjacentHTML( 'beforeend', chooseTheme() );


// localstorage tasks
const localstorageTasks = () => {
    let li = currentTasks.querySelectorAll( 'li' );

    let taskData = [...li].map( l => ({
        title: l.querySelector( '.title' ).textContent,
        text: l.querySelector( '.text' ).textContent,
        priority: l.querySelector( '.priority' ).textContent,
        date: l.querySelector( '.date' ).textContent,
    }) );

    localStorage.setItem( 'tasks', JSON.stringify( taskData ) );
};
