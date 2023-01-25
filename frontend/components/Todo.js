import React from 'react'


export default class Todo extends React.Component{
  constructor(props){
    super(props)
  }

  handleToggle = () => {
    this.props.handleClick(this.props.todo.id)
  }

  render(){
    
    return(
    <li onClick={this.handleToggle}>{this.props.todo.name}{this.props.todo.completed?<span> - complete </span>:<span></span>}</li>)
  }
}