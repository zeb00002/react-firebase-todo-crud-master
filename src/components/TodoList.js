import Todo from './Todo';

export default function TodoList({ todos, toggleComplete, handleDelete, handleEdit }) {
  return (
    <div className="todo_container">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}
