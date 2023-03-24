import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    }
  }
  
  change = e => {
    e.preventDefault();
    this.setState({...this.state, task: e.target.value});
  }

  submit = e => {
    e.preventDefault();
    console.log(this.state.task)
    this.props.addTask(e, this.state.task);
    this.setState({...this.state, task: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" name="task" onChange={this.change} value={this.state.task}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
