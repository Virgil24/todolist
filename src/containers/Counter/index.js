import { connect } from 'react-redux';
import Counter from 'src/components/Counter';

const mapStateToProps = (state) => ({
  taskData: state.tasks.tasksData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
