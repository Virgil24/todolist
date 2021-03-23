import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { addTask, saveTask } from 'src/actions/tasks';

const mapStateToProps = (state) => ({
  taskData: state.tasks.tasksData,
  newTaskLabel: state.tasks.newTaskLabel,
});

const mapDispatchToProps = (dispatch) => ({
  newTasks: (newData) => {
    dispatch(saveTask(newData));
  },
  onChange: (value) => {
    dispatch(addTask(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
