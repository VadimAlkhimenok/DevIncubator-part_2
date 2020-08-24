import { getDataForm } from "./form.js";

export const setColorTask = ({
    background() {
        return (getDataForm().priority === 'Low priority') ? 'blue' :
            (getDataForm().priority === 'Medium priority') ? 'orange' :
            (getDataForm().priority === 'High priority') ? 'green' :
            null;
    },
    color: '#fff'
});