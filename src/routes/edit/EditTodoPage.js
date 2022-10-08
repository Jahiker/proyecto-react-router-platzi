import React from 'react'
import { useParams } from 'react-router-dom';
import { TodoForm } from '../../ui/TodoForm'
import { useTodos } from '../useTodos'
import { useLocation } from 'react-router-dom';


const EditTodoPage = () => {
const { stateUpdaters, state } = useTodos();
const { getTodo, loading } = state;
const { editTodo } = stateUpdaters;
const params = useParams();
const id = Number(params.id);

const location = useLocation();

let todoText = ''

if(location.state?.todo) {
  todoText = location.state.todo.text;
} else if(loading) {
  return <p>Cargando...</p>
} else {
  const todo = getTodo(id);
  todoText = todo.text
}

return (
  <TodoForm 
    label="Edita tu TODO"
    defaultTodoText={todoText}
    submitText="Guardar"
    submitEvent={(newText) => editTodo(id, newText)}
  />
)

}

export {EditTodoPage}