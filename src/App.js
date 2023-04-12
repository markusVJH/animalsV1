import React, { Component, useState, useEffect }from 'react';
import { animals, birds } from "./animalsList";
import Animals from './pages/Animals';
import Birds from './pages/Birds';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import About from './pages/About/About';


class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    searchInput: ''
  };

  removeHandler = (name, type) => {
  const updatedArray = this.state.animals.filter(animal => animal.name !== name)
  this.setState({
    [type]: updatedArray
  })
  }
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

/* const [data, setLikes] = useState([]);
  
useEffect(() => {
  localStorage.setItem('dataKey', JSON.stringify(data));
}, [data]); */

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
          />}activeClassName='active'/>
          <Route path="/About" element={<About/>}/>
        </Routes>
    </BrowserRouter>
  );
}
}

export default App;