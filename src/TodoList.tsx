import React from 'react';
import './App.css';
import { TaskInterface } from './components/Task';
import TodoForm from './components/TodoForm';
import {
    DragDropContext,
    Droppable,
    DroppableProvided,
} from 'react-beautiful-dnd';
import { DraggableTask } from './components/DraggableTask';

type TodoListState = {
    tasks: Array<TaskInterface>;
};

export class TodoList extends React.Component<{}, TodoListState> {
    state: TodoListState = {
        tasks: [
            { text: 'Task 1', done: false, pined: false },
            { text: 'Task 2', done: false, pined: true },
            { text: 'Task 3', done: false, pined: false },
            { text: 'Task 4', done: true, pined: true },
        ],
    };

    constructor(props: any) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.toggleTaskPin = this.toggleTaskPin.bind(this);
        this.toggleTaskDone = this.toggleTaskDone.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    addTask(newTask: TaskInterface) {
        const { tasks } = this.state;
        this.setState({ tasks: [...tasks, newTask] });
    }

    removeTask(index: number) {
        const { tasks } = this.state;
        this.setState({ tasks: tasks.filter((_, i) => index !== i) });
    }

    toggleTaskPin(index: number) {
        let { tasks } = this.state;
        tasks[index].pined = !tasks[index].pined;
        this.setState({ tasks: tasks });
    }

    toggleTaskDone(index: number) {
        let { tasks } = this.state;
        tasks[index].done = !tasks[index].done;
        this.setState({ tasks: tasks });
    }

    onDragEnd(result: any) {
        const { tasks } = this.state;
        let newTasks = [...tasks];
        let cutOut = newTasks.splice(result.source.index, 1)[0]; // cut the element at index 'from'
        newTasks.splice(result.destination.index, 0, cutOut); // insert it at index 'to'
        this.setState({ tasks: newTasks });
    }

    render() {
        const { tasks } = this.state;
        return (
            <div className="App">
                <TodoForm addTask={this.addTask} />
                {tasks.length > 0 ? (
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable-1" type="TASK">
                            {(provided: DroppableProvided) => (
                                <div ref={provided.innerRef}>
                                    {tasks
                                        .sort(function (x, y) {
                                            return x.pined === y.pined
                                                ? 0
                                                : x.pined
                                                ? -1
                                                : 1;
                                        })
                                        .map((task, index) => (
                                            <DraggableTask
                                                {...task}
                                                index={index}
                                                removeTask={this.removeTask}
                                                toggleTaskPin={
                                                    this.toggleTaskPin
                                                }
                                                toggleTaskDone={
                                                    this.toggleTaskDone
                                                }
                                                provided={provided}
                                            />
                                        ))}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                ) : (
                    'Aucune tâche'
                )}
            </div>
        );
    }
}
