import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Counter = ({ taskData }) => {
  let count = 0;
  taskData.map((task) => {
    if (!task.done) {
      count += 1;
    }
  });
  let text = 'Aucune tâche en cours';
  if (count === 1) {
    text = '1 tâche en cours';
  }
  else if (count > 1) {
    text = `${count} tâches en cours`;
  }
  return (
    <p className="counter">{text}</p>
  );
};

Counter.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Counter;
