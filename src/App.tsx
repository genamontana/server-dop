import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from './components/SuperButton';
import {SuperInput} from './components/SuperInput';
import {FourthDopSuperButton} from './components/FourthDopSuperButton';
import {SuperTodolist} from './components/SuperTodolist';

type TodosType = {
    completed: boolean
    id: number
    title: string
    userId: number
}

function App() {
    /*3-й доп с Игорем*/
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

    /* 4-ый доп с Игорем*/
    const emptyCallback = () => {
        //вынес пустую функцию наверх как заглушку, не обращать внимания
    }

    const tasks = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    return (
        <div className="App">
            {/* 4-ый доп с Игорем*/}
            <br/>
            <br/>
            <SuperTodolist tasks={tasks}>
                <div>
                    <FourthDopSuperButton callback={emptyCallback}
                                          color={'red'}>
                        RED SUPER BUTTON
                    </FourthDopSuperButton>
                    <FourthDopSuperButton callback={emptyCallback}>
                        DEFAULT SUPER BUTTON
                    </FourthDopSuperButton>
                    <FourthDopSuperButton callback={emptyCallback}
                                          disabled
                                          color={'secondary'}>
                        DISABLED SUPER BUTTON
                    </FourthDopSuperButton>
                </div>
            </SuperTodolist>

            <div>-------------------------------------</div>
            <SuperTodolist tasks={tasks}>
                <div>some text</div>
                <div>some text</div>
                <div>some text</div>
                <div>some text</div>
            </SuperTodolist>
            <div>-------------------------------------</div>
            <SuperTodolist tasks={tasks}>
                <div>some text</div>
                <div>some text</div>
                <input type="text"/>
            </SuperTodolist>


            <br/>
            <br/>
            <FourthDopSuperButton callback={emptyCallback}
                                  color={'red'}>
                RED SUPER BUTTON
            </FourthDopSuperButton>
            <FourthDopSuperButton callback={emptyCallback}>
                DEFAULT SUPER BUTTON
            </FourthDopSuperButton>
            <FourthDopSuperButton callback={emptyCallback}
                                  disabled
                                  color={'secondary'}>
                DISABLED SUPER BUTTON
            </FourthDopSuperButton>
            <br/>
            <br/>
            <hr/>

            {/*3-й доп с Игорем*/}
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
