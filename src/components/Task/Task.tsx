import React from 'react';

export interface TaskInterface {
    text: string;
    done: boolean;
    pined: boolean;
}

export interface TaskProps extends TaskInterface {
    index: number;
    removeTask?: any;
    toggleTaskPin?: any;
    toggleTaskDone?: any;
}

export function Task({
    index,
    text,
    pined,
    done,
    toggleTaskDone,
    toggleTaskPin,
    removeTask,
}: TaskProps) {
    // console.log(index);
    return (
        <div
            className={`task-item${done ? ' task-done' : ''}${
                pined ? ' task-pined' : ''
            }`}
        >
            <div
                className="task-toggle"
                onClick={() => toggleTaskDone(index)}
            ></div>
            <p className="task-text">{text}</p>
            <span className="task-remove" onClick={() => removeTask(index)}>
                Supprimer
            </span>
            <span
                className="task-pin"
                onClick={() => toggleTaskPin(index)}
            ></span>
        </div>
    );
}
