import React from 'react'


export default class Todo extends React.Component{

  handleChange = () => {
    this.setState({
      ...this.state,
      completed: this.props.todo
    })
  }

  render(){
    
    const {handleChange} = this.props

    return(
    <li onClick={this.handleChange}>{this.props.todo.name}{this.props.todo.completed?<span> - complete </span>:<span></span>}</li>)
  }
}