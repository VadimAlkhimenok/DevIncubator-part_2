import { setFormPrevent, setFocus } from './components/form.js';
import { addTask } from './components/task.js';
import { resetData } from './components/reset.js';
import { useTaskProperties } from './components/taskProperties.js';
import { templateCounterTasks } from './components/counterTasks.js';
import { sortTasks } from './components/sortTasks.js';
import { chooseTheme } from './components/theme.js';
import { authorization } from './components/auth/authorization.js';


setFormPrevent();
addTask();
resetData();
useTaskProperties();
templateCounterTasks();
sortTasks();
chooseTheme();
setFocus();
authorization();