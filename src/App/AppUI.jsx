import React from 'react';
import { TodoContext } from './TodoContext/index.jsx';
import { TodoCounter } from '../components/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch.jsx';
import { TodoList } from '../components/TodoList.jsx';
import { TodoItem } from '../components/TodoItem.jsx';
import { CreateTodoButtom } from '../components/CreateTodoButton.jsx';
import { Modal } from '../Modal/index.jsx';
import { TodoForm } from '../components/TodoForm/TodoForm';

function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);
	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{error && <p>Desesperate, hubo un error</p>}
				{loading && <p>Estamos cargando, no desesperes</p>}
				{!loading && !searchedTodos.lenght && <p>¡Crea tu primer TODO!</p>}

				{searchedTodos.map(todo => (
					<TodoItem
						key={todo.id}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
			<CreateTodoButtom setOpenModal={setOpenModal} />
		</>
	);
}

export { AppUI };
