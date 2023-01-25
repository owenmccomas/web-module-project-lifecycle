import axios, { Axios } from "axios";
import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then((res) => {
        this.setState({ ...this.state, todos: res.data.data });
        console.log(this.state);
      })
      .catch((err) => console.error(err));
  }

  handleAdd = (name) => {
    axios.post(URL, {
        id: Date.now(),
        name: name,
        completed: false
      })
    .then(res => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos, res.data.data]
    })})
    .catch(err => console.error(err))
  }

  handleClick = (id) => {
    this.setState({
     ...this.state,
     todos: this.state.todos.map(todo => {
       if(todo.id === id ){
         return {
           ...todo, completed: !todo.completed
         }
       }
       else {
         return todo
       }
     })
    })
   }

   clear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    }
    )
  }

  render() {
    return (
      <div>
        Todo App <br />
        <br />
        <TodoList
          todos={this.state.todos}
          handleClick={this.handleClick}
        />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.clear}>clear</button>
      </div>
    );
  }
}
