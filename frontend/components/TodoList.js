import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor(props){
    super()
  }

  render(){
    const { change } = this.props
  return(
    <ul>
    {
      this.props.todos.map(
        todo => {
          return(
          <Todo todo={todo} handleClick={this.props.handleClick}/>
            )
        }
      )
    }
  </ul>
  )}
}