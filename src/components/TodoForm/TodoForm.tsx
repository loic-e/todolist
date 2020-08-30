import React, { useState } from 'react';
import Input from './../Input';

export interface TodoFormProps {
    addTask?: any;
}

export function TodoForm(props: TodoFormProps) {
    const [text, setText] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.addTask({ text, done: false, pined: false });
        setText('');
    };

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <Input
                onChange={(e: any) => setText(e.currentTarget.value)}
                value={text}
                placeholder="Ajouter une tâche"
                required
            />
            <button type="submit">+</button>
        </form>
    );
}
