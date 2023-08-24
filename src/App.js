import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
