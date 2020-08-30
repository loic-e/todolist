import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TodoList } from './TodoList';

export default {
    title: 'App/TodoList',
    component: TodoList,
} as Meta;

const Template: Story = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {};
