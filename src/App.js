import { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar"
import Card from "./components/Card"
import alertify from 'alertifyjs'

class App extends Component {
  state =
    {
      toDo: "",
      card: [],
    }

  changeInput = (event) => {
    let value = event.target.value;
    this.setState({ toDo: value })
  }

  addToValue = () => {
    this.state.toDo ? this.setState({ card: [...this.state.card, this.state.toDo] }) : alertify.error('Bir Görev Girmen Gerekli', 2);
  }

  removeToCard = (event) => {
    var array = [...this.state.card]
    var index = array.indexOf(event.target.id)
    array.splice(index, 1)
    this.setState({ card: array })
  }

  correctToCard = (event) => {
    if(event.target.id==="correct"){
      event.target.id="correctToggle"
    }
    else{
      event.target.id="correct"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>ToDoLİST</h1>
        <SearchBar
          changeInput={this.changeInput}
          addToValue={this.addToValue}
        />
        <Card
          addToCard={this.state.card}
          toDoProps={this.state.toDo}
          removeToCard={this.removeToCard}
          correctToCard={this.correctToCard}
        />
      </div>
    );
  }
}

export default App;
