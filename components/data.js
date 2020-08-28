import { getDataFormRegistr } from './auth/authorization.js';

export let userData = [];

export const saveDataNewUser = () => {
    userData.push({
        name: getDataFormRegistr().name,
        email: getDataFormRegistr().email,
        password: getDataFormRegistr().password,
        repeatPassword: getDataFormRegistr().repeatPassword,
        tasks: [],
    })

    localStorage.setItem("users", JSON.stringify(userData));
}

export const getDataUser = email => {
    for (let i = 0; i < userData.length; i++)
      if (Object.values(userData[i]).includes(email))
          return userData[i];
}

