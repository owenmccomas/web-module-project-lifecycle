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
    
    axios.post(URL)
    .then(res => {
    const newTodo = {
      id: Date.now(),
      name: name,
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, res.data.data, newTodo]
    })})
    .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        Todo App <br />
        <br />
        <TodoList
          todos={this.state.todos}
        />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.clear}>clear</button>
      </div>
    );
  }
}
