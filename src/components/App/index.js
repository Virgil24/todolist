import React from 'react';
import './styles.scss';
import Tasks from 'src/containers/Tasks';
import Form from 'src/containers/Form';
import Counter from 'src/containers/Counter';

const App = () => (
  <div className="app">
    <h1 className="title">Ma TodoList, pour ne rien oublier de mes objectifs ! </h1>
    <Form />
    <Counter />
    <Tasks />
  </div>
);
export default App;
