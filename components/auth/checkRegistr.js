export const isEmptyInputRegistr = ({ name, email, password, repeatPassword }) => {
    return (email === '') && (password === '') && (name === '') && (repeatPassword === '') ? true : false;
}

export const isCorrectPasswordReg = ({ password, repeatPassword }) => {
    return (password === repeatPassword) ? true : false;
}