import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write Tests', completed: true }
  ]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Todo List
      </h1>

      <AddTodoForm onAddTodo={addTodo} />

      <div style={{ marginTop: '20px' }}>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
            No todos yet. Add one above!
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>

      <div style={{ 
        marginTop: '30px', 
        textAlign: 'center',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
          Total: {todos.length} | Completed: {todos.filter(t => t.completed).length} | 
          Remaining: {todos.filter(t => !t.completed).length}
        </p>
      </div>
    </div>
  );
};

// AddTodoForm component
const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        style={{
          flex: 1,
          padding: '12px',
          border: '2px solid #e9ecef',
          borderRadius: '8px',
          fontSize: '16px',
          outline: 'none',
          transition: 'border-color 0.2s ease'
        }}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
      />
      <button
        type="submit"
        style={{
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Add Todo
      </button>
    </form>
  );
};

// TodoItem component
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '12px', 
      margin: '8px 0',
      backgroundColor: todo.completed ? '#f8f9fa' : 'white',
      border: '1px solid #e9ecef',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      transition: 'all 0.2s ease'
    }}>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          flex: 1,
          cursor: 'pointer',
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#6c757d' : '#333',
          fontSize: '16px',
          padding: '8px'
        }}
        data-testid={`todo-item-${todo.id}`}
      >
        {todo.text}
      </span>
      <span style={{ 
        marginRight: '10px', 
        fontSize: '12px', 
        color: todo.completed ? '#28a745' : '#ffc107',
        fontWeight: 'bold'
      }}>
        {todo.completed ? '✓ Completed' : '⏳ Pending'}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{
          padding: '6px 12px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
        data-testid={`delete-todo-${todo.id}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoList;
export { AddTodoForm, TodoItem };
