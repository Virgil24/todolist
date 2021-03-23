export const TASK_CHECKED = 'TASK_CHECKED';
export const ADD_TASK = 'ADD_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const OPEN_MODAL = 'OPEN_MODAL';
export const EDIT_TASK = 'EDIT_TASK';
export const SAVE_INPUT_EDITED = 'SAVE_INPUT_EDITED';

export const taskChecked = (taskStatus) => ({
  type: TASK_CHECKED,
  taskStatus,
});

export const addTask = (value) => ({
  type: ADD_TASK,
  value,
});

export const saveTask = (newData) => ({
  type: SAVE_TASK,
  newData,
});
export const deleteTask = (activeTasks) => ({
  type: DELETE_TASK,
  activeTasks,
});
export const openModal = (modalBoolean) => ({
  type: OPEN_MODAL,
  modalBoolean,
});
export const editTask = (newValue) => ({
  type: EDIT_TASK,
  newValue,
});
export const saveInputEdited = (editedTask, modalBoolean) => ({
  type: SAVE_INPUT_EDITED,
  editedTask,
  modalBoolean,
});
