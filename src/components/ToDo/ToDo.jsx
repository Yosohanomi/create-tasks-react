import { Component } from "react";
// import taskData from './todo.json'
const taskData = [
    {"id": "id-1", "text": "Do React", "complete": false},
    {"id": "id-2", "text": "Do React 2", "complete": true},
    {"id": "id-3", "text": "Do React 3", "complete": false}
]
export class Todo extends Component {
    state = {
        tasks: taskData,
    }

    render() {
        return (
            <>
                <ul>
                    {this.state.tasks.map(task => {
                        console.log(task);
                        <li>{task.text}</li>
                    })}
                </ul>
            </>
        )
    }
}