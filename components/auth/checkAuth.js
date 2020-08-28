import { getDataUser, userData } from "../data.js";


export const isEmptyInput = (email, password) => (email === '') && (password === '') ? true : false;

export const isCorrectEmail = email => {
    const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(email);
}

export const isCorrectPassword = (password, email) => {
    const user = getDataUser(email);
    return (password === user.password) ? true : false;
}

export const isFoundUser = email => {
    for (let i = 0; i < userData.length; i++)
        if (Object.values(userData[i]).includes(email))
            return true;
    return false;
}