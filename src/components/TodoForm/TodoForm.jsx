import React from 'react';
import { TodoContext } from '../../App/TodoContext';
import './TodoForm.css';

export const TodoForm = () => {
	const [newTodoValue, setNewTodoValue] = React.useState('');
	const { addTodo, setOpenModal } = React.useContext(TodoContext);
	const onSubmit = ev => {
		ev.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};
	const onChange = ev => {
		setNewTodoValue(ev.target.value);
	};
	const onCancel = () => {
		setOpenModal(false);
	};
	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				value={newTodoValue}
				onChange={onChange}
				placeholder='cortar la cebolla'
			/>
			<div className='TodoForm-buttonContainer'>
				<button
					type='button'
					className='TodoForm-button TodoForm-button--cancel'
					onClick={onCancel}
				>
					Cancelar
				</button>
				<button
					type='submit'
					className='TodoForm-button TodoForm-button--add'
					onClick={onSubmit}
				>
					Añadir
				</button>
			</div>
		</form>
	);
};
