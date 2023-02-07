import React from 'react';

type PropsType = {
    id: number
    title: string
    isDone: boolean
}
type GeneralType = {
    tasks: PropsType[]
    children:React.ReactNode
}

export const SuperTodolist = (props: GeneralType) => {
    return (
        <div>
            <ul>
                {props.tasks.map(el => {
                    return(
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type={'checkbox'}
                                   checked={el.isDone}/>
                        </li>

                    )
                })}
            </ul>
            {props.children}
        </div>
    );
};
