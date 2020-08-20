export const getCurrentDate = () => {
    let today = new Date();
    let date = `${ today.getDate() }.${ today.getMonth() }.${ today.getFullYear() }`;
    let time = `${ today.getHours() }:${ today.getMinutes() }`
    return `${ time } ${ date }`;
};