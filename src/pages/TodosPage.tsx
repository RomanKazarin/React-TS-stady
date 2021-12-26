import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Itodo } from '../interfaces';

export const TodosPage: React.FunctionComponent = () => {

  const [todos, setTodos] = useState<Itodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Itodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: Itodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...todos])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }
  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Вы уверены что хотите удалить элемент?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler}></TodoForm>
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}></TodoList>
    </React.Fragment>
  )
}