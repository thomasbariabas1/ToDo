import React from 'react';
import ToDo from "./views/ToDoView";
import TodoLayout from "./layouts/TodoLayout";

function App() {
  return (
      <TodoLayout>
          <ToDo/>
      </TodoLayout>
  );
}

export default App;
