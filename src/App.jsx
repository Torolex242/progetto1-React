import React, { Component } from  'react'


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: 'dummy text',
            tasks: []
        }
    }


    changeText(e) {
        this.setState({
            task: e.target.value
        })
    }

    addTask() {
        let tasks = this.state.tasks
        tasks.push(this.state.task)
        this.setState({
            tasks
        })
    }

    listTasks () {
        let tasks = this.state.tasks
        return (
            <ul>
                {
                    tasks.map((val, index) => {
                        return (
                            <li key={index}>
                                {val}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render () {
        return <div className="custom-div ">
            <h1 id="h1">Welcome, what tasks do you have to complete today?</h1>
            
            <input className="custom-input" type="text" placeholder="Add new task" onChange={(e) => this.changeText(e)}/>
            <button id="button" onClick={() => this.addTask()}>
                AddTask
            </button>
            <ul className="listTask">
            { this.listTasks()}
            </ul>
            
        </div>
    }
}
export default App