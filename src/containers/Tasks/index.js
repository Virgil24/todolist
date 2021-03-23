import { connect } from 'react-redux';
import Tasks from 'src/components/Tasks';
import {
  taskChecked, deleteTask, openModal, editTask, saveInputEdited,
} from 'src/actions/tasks';

const mapStateToProps = (state) => ({
  taskData: state.tasks.tasksData,
  newData: state.tasks.newData,
  showModalBoolean: state.tasks.showModalBoolean,
  newTaskLabel: state.tasks.newTaskLabel,
  editedInput: state.tasks.editedInput,
});

const mapDispatchToProps = (dispatch) => ({
  taskChecked: (taskStatus) => {
    dispatch(taskChecked(taskStatus));
  },
  deleteTask: (activeTasks) => {
    dispatch(deleteTask(activeTasks));
  },
  openModal: (modalBoolean) => {
    dispatch(openModal(modalBoolean));
  },
  inputHasChanged: (newValue) => {
    dispatch(editTask(newValue));
  },
  saveInputEdited: (editedTask, modalBoolean) => {
    dispatch(saveInputEdited(editedTask, modalBoolean));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
