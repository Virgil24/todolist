import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Form = ({
  onChange, newTaskLabel, newTasks, taskData,
}) => {
  // on sort l'id le plus eleve des tasks présentes
  const getId = taskData.map((task) => task.id);
  const maxId = getId.reduce((a, b) => Math.max(a, b));

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // id+1 afin de se retrouver obligtoirement avec un id unique
    const newData = {
      id: maxId + 1,
      label: newTaskLabel,
      done: false,
    };
    newTasks(newData);
  };
  const handleOnChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };
  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input
        className="form__input"
        type="text"
        placeholder="Ajouter une tâche"
        onChange={handleOnChange}
        value={newTaskLabel}
      />
    </form>
  );
};

Form.propTypes = {

  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  newTaskLabel: PropTypes.string.isRequired,
  newTasks: PropTypes.func.isRequired,
};

export default Form;
