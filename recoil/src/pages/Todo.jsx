import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../utils/Recoil';
import TodoItemCreator from '../components/TodoItemCreator';
import TodoItem from '../components/TodoItem';

const TodoList = () => {

    const todoList = useRecoilValue(todoListState);

    return (
        <>
        <TodoItemCreator />

        {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
        ))}
        </>
    );
};

export default TodoList;