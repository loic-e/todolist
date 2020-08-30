import React from 'react';

export type InputProps = {
    onChange?: any;
    type?: 'text' | 'password' | 'number';
    value?: string;
    placeholder?: string;
    required?: boolean;
};

export function Input(props: InputProps) {
    return <input {...props} />;
}
