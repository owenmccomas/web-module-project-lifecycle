import React from 'react'

export default class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleAdd(this.state.input)
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }

  render() {
    // console.log(this.state.input)
    const {handleAdd} = this.props
    
    return (
      <form>
        <input 
          type='text'
          placeholder='add to todo list'
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>add</button> 
        </form>
    )
  }
}