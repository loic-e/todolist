import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Task, TaskProps } from './Task';

export default {
    title: 'Components/Task',
    component: Task,
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
    index: 0,
    text: 'A default task',
    done: false,
    pined: false,
};

Default.parameters = {
    backgrounds: {
        values: [
            { name: 'red', value: '#f00' },
            { name: 'green', value: '#0f0' },
        ],
    },
};

export const Done = Template.bind({});

Done.args = {
    index: 0,
    text: 'A done task',
    done: true,
    pined: false,
};

export const Pined = Template.bind({});
Pined.storyName = 'Done & Pined';
Pined.args = {
    index: 0,
    text: 'A pined task',
    done: true,
    pined: true,
};
