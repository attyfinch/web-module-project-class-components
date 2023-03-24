import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  render() {
    return (
      <div>
        {this.props.taskList.map(task => (
          <Todo task={task} name={task.name} id={task.id} key={task.id} done={this.props.done}/>
        ))}
      </div>
    )
  }
}
