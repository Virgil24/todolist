import tasksData from 'src/data/tasks';
import {
  TASK_CHECKED, ADD_TASK, SAVE_TASK, DELETE_TASK, OPEN_MODAL, EDIT_TASK, SAVE_INPUT_EDITED,
} from 'src/actions/tasks';

export const initialState = {
  tasksData,
  newTaskLabel: '',
  editedInput: '',
  showModalBoolean: false,
};

const tasks = (state = initialState, action = {}) => {
  switch (action.type) {
    case TASK_CHECKED:
      return {
        ...state,
        tasksData: action.taskStatus,
      };
    case ADD_TASK:
      return {
        ...state,
        newTaskLabel: action.value,
      };
    case SAVE_TASK:
      return {
        ...state,
        tasksData: [...state.tasksData, action.newData],
        newTaskLabel: '',
      };
    case DELETE_TASK:
      return {
        ...state,
        tasksData: action.activeTasks,
      };
    case OPEN_MODAL:
      return {
        ...state,
        showModalBoolean: !action.modalBoolean,
      };
    case EDIT_TASK:
      return {
        ...state,
        editedInput: action.newValue,
      };
    case SAVE_INPUT_EDITED:
      return {
        ...state,
        tasksData: action.editedTask,
        showModalBoolean: !action.modalBoolean,
      };
    default:
      return state;
  }
};

export default tasks;
