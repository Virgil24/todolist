import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon, Input } from 'semantic-ui-react';
import './styles.scss';

const Task = ({
  label,
  id,
  onChanges,
  done,
  deleteAfterClick,
  displayModal,
  modalBoolean,
  newInput,
  editInput,
}) => {
  // selon que la task soit false or true, on applique une classe differente
  const classnames = classNames('task', { 'task--done': done });
  const handleOnChange = () => {
    onChanges(id);
  };
  const deleteOnClick = () => {
    deleteAfterClick(id);
  };
  const showModal = () => {
    displayModal(modalBoolean);
  };
  const handleNewInput = (event) => {
    newInput(event.target.value);
  };
  const saveNewInput = (event) => {
    editInput(event.target.value);
  };
  return (

    <li className={classnames}>
      {!modalBoolean && (
        <>
          <label className="task__label">
            <input
              type="checkbox"
              className="task__checkbox"
              checked={done}
              onChange={handleOnChange}
            />
            {label}
          </label>
          <div className="icons">
            <Icon id="icon" name="edit" onClick={showModal} />
            <Icon id="icon" name="delete" onClick={deleteOnClick} />
          </div>
        </>
      )}
      {modalBoolean && (
        <>
          <Input placeholder={label} onChange={handleNewInput} />
          <div className="icons">
            <Icon name="check" onClick={saveNewInput} color="black" />
            <Icon name="cancel" onClick={showModal} color="black" />
          </div>
        </>
      )}

    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChanges: PropTypes.func.isRequired,
  deleteAfterClick: PropTypes.func.isRequired,
  displayModal: PropTypes.func.isRequired,
  modalBoolean: PropTypes.bool.isRequired,
  newInput: PropTypes.func.isRequired,
  editInput: PropTypes.func.isRequired,
};
export default Task;
