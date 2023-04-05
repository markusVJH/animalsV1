import React, { Component } from 'react';
import { animals } from "./animalsList";
import Animals from './Animals';
import './App.css';


class App extends Component {
  state = {
    animals: animals,
    searchInput: ''
  }
  removeHandler = (name) => {
  const updatedArray = this.state.animals.filter(animal => animal.name !== name)
  this.setState({
    animals: updatedArray
  })
  }

  likesHandler = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.animals.map((animal)=> {
        if (animal.name === name) {
          if (action === 'plus') {
          return { ...animal, likes: animal.likes + 1}
        } else {
          return { ...animal, likes: animal.likes - 1}
        }
        } else {
          return animal
       }
})
return {
  animals: updatedArray
}
    })

  }

searchHandler = (e) => {
this.setState({
  searchInput: e.target.value
})
}

  render() {
    return (
      <div>
        <main className="animals">
        <Animals 
        data={this.state.animals}
        removeHandler={this.removeHandler}
        likesHandler={this.likesHandler}
        searchHandler={this.searchHandler}
        searchInput={this.state.searchInput}
        />
        </main>
      </div>
    );
  }
}

export default App;