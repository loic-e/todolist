import React from 'react';
import {
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import { Task, TaskProps } from '../Task';

export interface DraggableTaskProps extends TaskProps {
    provided: any;
}

export function DraggableTask({ ...task }: DraggableTaskProps) {
    return (
        <Draggable draggableId={`task-${task.index}`} index={task.index}>
            {(
                provided: DraggableProvided,
                snapshot: DraggableStateSnapshot
            ) => {
                return (
                    <div
                        ref={provided.innerRef || undefined}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Task {...task} />
                    </div>
                );
            }}
        </Draggable>
    );
}
