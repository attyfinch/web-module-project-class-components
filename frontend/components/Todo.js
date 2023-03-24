import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className={this.props.task.completed ? 'done' : ""} onClick={() => this.props.done(this.props.id)}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}


