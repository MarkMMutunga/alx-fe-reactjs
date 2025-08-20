import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoList, { AddTodoForm, TodoItem } from '../components/TodoList';

// Test TodoList Component
describe('TodoList Component', () => {
  test('renders todo list with initial todos', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('displays correct todo statistics', () => {
    render(<TodoList />);
    
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Remaining: 2/)).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    await user.type(input, 'New Todo Item');
    await user.click(addButton);
    
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    expect(screen.getByText(/Total: 4/)).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  test('does not add empty todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const addButton = screen.getByText('Add Todo');
    
    await user.click(addButton);
    
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
  });

  test('does not add todos with only whitespace', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    await user.type(input, '   ');
    await user.click(addButton);
    
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
  });

  test('toggles todo completion status when clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoItem = screen.getByTestId('todo-item-1');
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
    
    await user.click(todoItem);
    
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    
    const deleteButton = screen.getByTestId('delete-todo-1');
    await user.click(deleteButton);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByText(/Total: 2/)).toBeInTheDocument();
  });

  test('shows empty state message when no todos exist', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByText('Delete');
    for (let button of deleteButtons) {
      await user.click(button);
    }
    
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    expect(screen.getByText(/Total: 0/)).toBeInTheDocument();
  });
});

// Test AddTodoForm Component
describe('AddTodoForm Component', () => {
  test('renders input and button correctly', () => {
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('calls onAddTodo with input value when form is submitted', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');
    
    await user.type(input, 'Test Todo');
    await user.click(button);
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('Test Todo');
    expect(input.value).toBe('');
  });

  test('clears input after submission', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Test Todo');
    fireEvent.submit(input.closest('form'));
    
    expect(input.value).toBe('');
  });

  test('submits form when Enter key is pressed', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Test Todo{enter}');
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('Test Todo');
  });

  test('updates input value when typing', async () => {
    const user = userEvent.setup();
    const mockOnAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    await user.type(input, 'Test Input');
    
    expect(input.value).toBe('Test Input');
  });
});

// Test TodoItem Component
describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test Todo',
    completed: false
  };

  const mockCompletedTodo = {
    id: 2,
    text: 'Completed Todo',
    completed: true
  };

  test('renders todo item correctly', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
    expect(screen.getByText('⏳ Pending')).toBeInTheDocument();
  });

  test('renders completed todo correctly', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(<TodoItem todo={mockCompletedTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    expect(screen.getByText('Completed Todo')).toBeInTheDocument();
    expect(screen.getByText('✓ Completed')).toBeInTheDocument();
    
    const todoText = screen.getByTestId('todo-item-2');
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  test('calls onToggle when todo text is clicked', async () => {
    const user = userEvent.setup();
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    const todoText = screen.getByTestId('todo-item-1');
    await user.click(todoText);
    
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    const deleteButton = screen.getByTestId('delete-todo-1');
    await user.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test('applies correct styles for pending todos', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(<TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    const todoText = screen.getByTestId('todo-item-1');
    expect(todoText).toHaveStyle('text-decoration: none');
    expect(todoText).toHaveStyle('color: #333');
  });

  test('applies correct styles for completed todos', () => {
    const mockOnToggle = jest.fn();
    const mockOnDelete = jest.fn();
    
    render(<TodoItem todo={mockCompletedTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />);
    
    const todoText = screen.getByTestId('todo-item-2');
    expect(todoText).toHaveStyle('text-decoration: line-through');
    expect(todoText).toHaveStyle('color: #6c757d');
  });
});

// Integration Tests
describe('TodoList Integration Tests', () => {
  test('complete todo workflow: add, toggle, and delete', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Add a new todo
    const input = screen.getByPlaceholderText('Add a new todo...');
    await user.type(input, 'Integration Test Todo');
    await user.click(screen.getByText('Add Todo'));
    
    expect(screen.getByText('Integration Test Todo')).toBeInTheDocument();
    expect(screen.getByText(/Total: 4/)).toBeInTheDocument();
    
    // Toggle the new todo
    const newTodoItem = screen.getByText('Integration Test Todo');
    await user.click(newTodoItem);
    expect(newTodoItem).toHaveStyle('text-decoration: line-through');
    expect(screen.getByText(/Completed: 2/)).toBeInTheDocument();
    
    // Delete the todo
    const deleteButtons = screen.getAllByText('Delete');
    const lastDeleteButton = deleteButtons[deleteButtons.length - 1];
    await user.click(lastDeleteButton);
    
    expect(screen.queryByText('Integration Test Todo')).not.toBeInTheDocument();
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
  });

  test('statistics update correctly with multiple operations', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Initial state: Total: 3, Completed: 1, Remaining: 2
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Remaining: 2/)).toBeInTheDocument();
    
    // Add a new todo
    const input = screen.getByPlaceholderText('Add a new todo...');
    await user.type(input, 'New Todo');
    await user.click(screen.getByText('Add Todo'));
    
    // Should be: Total: 4, Completed: 1, Remaining: 3
    expect(screen.getByText(/Total: 4/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Remaining: 3/)).toBeInTheDocument();
    
    // Toggle a pending todo to completed
    const learnReactTodo = screen.getByTestId('todo-item-1');
    await user.click(learnReactTodo);
    
    // Should be: Total: 4, Completed: 2, Remaining: 2
    expect(screen.getByText(/Total: 4/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 2/)).toBeInTheDocument();
    expect(screen.getByText(/Remaining: 2/)).toBeInTheDocument();
  });
});
