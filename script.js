import { setFormPrevent, resetData } from './components/modalAddTasks.js';
import { addTask } from './components/task.js';
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
authorization();
