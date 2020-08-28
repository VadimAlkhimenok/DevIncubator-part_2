import { getDataForm } from "./modalAddTasks.js";

export const setColorTask = ({
    color: '#fff',
    background() {
        return (getDataForm().priority === 'Low priority') ? 'blue' :
            (getDataForm().priority === 'Medium priority') ? 'orange' :
            (getDataForm().priority === 'High priority') ? 'green' :
            null;
    },
});