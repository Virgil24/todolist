import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Task from 'src/components/Task';

const Tasks = ({
  taskChecked,
  taskData,
  deleteTask,
  showModalBoolean,
  openModal,
  newTaskLabel,
  inputHasChanged,
  saveInputEdited,
  editedInput,
}) => (

  <ul className="tasks__label">
    {taskData.map((tasks) => {
      const onChange = () => {
        // On reproduit un object afin de le remplacer par celui deja existant,
        // on modifie simplement la valeur : done
        const isChecked = [{
          id: tasks.id,
          label: tasks.label,
          done: !tasks.done,
        }];
        // https://stackoverflow.com/questions/37585309/replacing-objects-in-array
        // On remplace l'object possedant le meme id que celui cliqué
        // par le nouvel object "ischecked" crée
        const TaskChecked = taskData.map((obj) => isChecked.find((o) => o.id === obj.id) || obj);
        taskChecked(TaskChecked);
      };
      const deleteOnClick = () => {
        const clickedId = tasks.id;
        // On filtre les taches en ressortant toutes les taches sauf celle qui possede l'id cliqué
        const activeTasks = taskData.filter((task) => task.id !== clickedId);
        deleteTask(activeTasks);
      };
      const displayModal = (modalBoolean) => {
        openModal(modalBoolean);
      };
      const newInput = (newValue) => {
        inputHasChanged(newValue);
      };
      const editInput = () => {
        const hasChanged = [{
          id: tasks.id,
          label: editedInput,
          done: tasks.done,
        }];
        // je map sur mes taches, je trouve l'id de la tache correspondant a celle edité,
        // et je la remplace par haschanged https://stackoverflow.com/questions/37585309/replacing-objects-in-array/47082214
        const editedTask = taskData.map((obj) => hasChanged.find((o) => o.id === obj.id) || obj);
        console.log(editedTask);
        saveInputEdited(editedTask, showModalBoolean);
      };
      return (
        <Task
          key={tasks.id}
          onChanges={onChange}
          {...tasks}
          deleteAfterClick={deleteOnClick}
          modalBoolean={showModalBoolean}
          displayModal={displayModal}
          newTaskLabel={newTaskLabel}
          newInput={newInput}
          editInput={editInput}
        />
      );
    })}
  </ul>
);

Tasks.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  taskChecked: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  showModalBoolean: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  inputHasChanged: PropTypes.func.isRequired,
  saveInputEdited: PropTypes.func.isRequired,
  newTaskLabel: PropTypes.string.isRequired,
  editedInput: PropTypes.string.isRequired,
};
export default Tasks;
