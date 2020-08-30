import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TodoForm, TodoFormProps } from './TodoForm';

export default {
    title: 'Components/TodoForm',
    component: TodoForm,
} as Meta;

const Template: Story<TodoFormProps> = (args) => <TodoForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
