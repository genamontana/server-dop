import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from './components/SuperButton';
import {SuperInput} from './components/SuperInput';

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])
    const [newTitle, setNewTitle] = useState('')
    const myFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }
    useEffect(() => {
        myFetch()
    }, [])


    const showUpHandler = () => {
        myFetch()
    }
    const deleteHandler = () => {
        setTodos([])
    }
    const addNewTitleHandler = () => {
        const newTodo = {
            completed: false,
            id: todos.length + 1,
            title: newTitle,
            userId: 100200,
        }
        setTodos([newTodo, ...todos])
        setNewTitle('')
    }

    const mappedTodos = todos.map(el => {
        return (
            <li key={el.id}>
                <span>{el.id}</span>
                <span>{el.title}</span>
                <input type="checkbox" checked={el.completed}/>
            </li>
        )
    })

    return (
        <div className="App">
            <SuperButton name={'SHOW UP'}
                         callBack={showUpHandler}/>
            <SuperButton name={'DELETE'}
                         callBack={deleteHandler}/>
            <SuperInput setNewTitle={setNewTitle}
                        newTitle={newTitle}/>
            <SuperButton name={'ADD NEW TITLE'}
                         callBack={addNewTitleHandler}/>
            <ul>
                {mappedTodos}
            </ul>
        </div>
    );
}

export default App;
