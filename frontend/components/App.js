import React from 'react'
import Form from './Form'
import TodoList from './TodoList';

const taskList = [
  {
    name: 'wash dishes',
    id: 1,
    completed: false
  },
  {
    name: 'mow lawn',
    id: 2,
    completed: false
  },
  {
    name: 'build app',
    id: 3,
    completed: false
  }];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: taskList
    }
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state, tasks: [...this.state.tasks, newTask]})
  }

  // toggleComplete
  done = id => {
    this.setState({...this.setState, tasks: this.state.tasks.map(task => {
      console.log(id)
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })})
  }
  // clearTask
  clearTask = () => {
    this.setState({...this.state, tasks: this.state.tasks.filter(task => {
      if (!task.completed)
      return task;
    })})
  }

  // clearPurchased = () => {
  //   this.setState({...this.state, groceries: this.state.groceries.filter(item => {
  //     if (!item.purchased) return item;
  //   })})
  // }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoList taskList={this.state.tasks} done={this.done}/>
        <Form addTask={this.addTask} />
        <button onClick={this.clearTask}>Clear Completed Tasks</button>
      </div>
    )
  }
}
