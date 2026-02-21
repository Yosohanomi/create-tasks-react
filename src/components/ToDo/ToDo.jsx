import { Component } from "react";
import { ToDoButtonAdd } from "./ToDo.styles";
import { ToDoButtonDelete } from "./ToDo.styles";
import { ToDoUl } from "./ToDo.styles";
import { ToDoLi } from "./ToDo.styles";
import { ToDoLabel } from "./ToDo.styles";
import { ToDoDiv } from "./ToDo.styles";
import { ToDoText } from "./ToDo.styles";
import { ToDoInputCheck } from "./ToDo.styles";
// import taskData from './todo.json'
const taskData = [
    {"id": "id-1", "text": "Do React", "complete": false},
    {"id": "id-2", "text": "Do 2", "complete": true},
    {"id": "id-3", "text": "Do 3", "complete": false}
]
export class Todo extends Component {
    state = {
        tasks: taskData,
        filter: '',
    }
    allTasks = () => {
        return this.state.tasks.length; 
    }
    allTasksDone = () => {
        return this.state.tasks.filter(task => task.complete).length;
    }

    toggleState = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => 
                task.id === id ? {...task, complete: !task.complete} : task
            )
        }))
    }

    addTask = () => {
        const text = this.input.value.trim();
        if (!text) return;

        this.setState(prevState => ({
            tasks: [...prevState.tasks, {
                id: Date.now().toString(),
                text: text,
                complete: false
            }]
        }));
        this.input.value = "";
    };
    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value });
    }
    getFilteredTasks = () => {
        const { tasks, filter } = this.state;
        
        if (!filter.trim()) {
            return tasks;
        }
        
        return tasks.filter(task => 
            task.text.toLowerCase().includes(filter.toLowerCase())
        );
    }

    deleteTask = (id) => {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }));
    };

    render() {
        const filteredTasks = this.getFilteredTasks();
        return (
            <ToDoDiv>
            <ToDoText>All tasks: {this.allTasks()}</ToDoText>
            <ToDoText>Done: {this.allTasksDone()}</ToDoText>
                <input
                    type="text"
                    ref={(el) => (this.input = el)}
                />

                <ToDoButtonAdd
                    onClick={this.addTask}
                >
                    Add task
                </ToDoButtonAdd>

                <input
                    type="text"
                    placeholder="Filter by text"
                    value={this.state.filter}
                    onChange={this.handleFilterChange}
                />
                
                <ToDoUl>
                    {filteredTasks.map(task => {
                        
                        return <ToDoLi key={task.id}>
                            <ToDoInputCheck
                                type="checkbox"
                                id={`${task.id}input`}
                                checked={task.complete}
                                onChange={() => this.toggleState(task.id)}
                            />
                            <ToDoLabel htmlFor={`${task.id}input`}>{task.text}</ToDoLabel>
                            
                            <ToDoButtonDelete
                                onClick={() => this.deleteTask(task.id)}
                            >
                                Delete task
                            </ToDoButtonDelete>
                        </ToDoLi>
                    })}
                </ToDoUl>
                
            </ToDoDiv>
        )
    }
}