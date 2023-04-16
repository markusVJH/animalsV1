import React, { Component }from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Animals from './pages/Animals/Animals';
import Birds from './pages/Animals/Birds';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import About from './pages/About/About';

import { animals, birds } from "./animalsList";

class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    searchInput: ''
  };

  componentDidMount() {
    const animalsLikes = JSON.parse(localStorage.getItem('animalsLikes'));
    if (animalsLikes) {
      this.setState(prevState => ({
        animals: prevState.animals.map(animal => ({
          ...animal,
          likes: animalsLikes[animal.name] || animal.likes
        }))
      }));
    }

    const birdsLikes = JSON.parse(localStorage.getItem('birdsLikes'));
    if (birdsLikes) {
      this.setState(prevState => ({
        birds: prevState.birds.map(bird => ({
          ...bird,
          likes: birdsLikes[bird.name] || bird.likes
        }))
      }));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('animalsLikes', JSON.stringify(
      this.state.animals.reduce((likes, animal) => ({
        ...likes,
        [animal.name]: animal.likes
      }), {})
    ));

    localStorage.setItem('birdsLikes', JSON.stringify(
      this.state.birds.reduce((likes, bird) => ({
        ...likes,
        [bird.name]: bird.likes
      }), {})
    ));
  }

  removeHandler = (name, type, componentType) => {
    const updatedArray = this.state[componentType].filter(animal => animal.name !== name);
    this.setState({
      [type]: updatedArray
    });
  };
  likesHandler = (name, action, type) => {
    this.setState((prevState) => {
      const updatedArray = prevState[type].map((animal)=> {
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
 [type]: updatedArray
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
    <BrowserRouter>
      <Navigation animalsCount={this.state.animals.length} birdsCount={this.state.birds.length}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/animals" element={<Animals
            data={this.state.animals}
            removeHandler={this.removeHandler}
            likesHandler={this.likesHandler}
            searchHandler={this.searchHandler}
            searchInput={this.state.searchInput}
          />}/>
          <Route path="/birds" element={<Birds
            data={this.state.birds}
            removeHandler={this.removeHandler}
            likesHandler={this.likesHandler}
            searchHandler={this.searchHandler}
            searchInput={this.state.searchInput}
          />}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
  );
}
}

export default App;