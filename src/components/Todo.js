import { useState } from 'react';

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = '';
      setNewTitle(e.target.value);
    }
  };

  return (
    <div className='todo'>
      <div className='text-field'>
        <input
          style={{ textDecoration: todo.completed && 'line-through' }}
          type='text'
          onChange={handleChange}
          value={todo.title === '' ? newTitle : todo.title}
        />
      </div>
      <div clasname='buttons'>
        <button
          className='button-complete'
          onClick={() => toggleComplete(todo)}
        >
          Complete
        </button>
        <button
          className='button-edit'
          onClick={() => handleEdit(todo, newTitle)}
        >
          Edit
        </button>
        <button className='button-delete' onClick={() => handleDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
