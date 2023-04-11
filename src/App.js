import React, { Component } from 'react';
import { animals, birds } from "./animalsList";
import Animals from './Animals';
import Birds from './Birds';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from './Home';



class App extends Component {
  state = {
    animals: animals,
    birds: birds,
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
    <BrowserRouter>
      <div>
        <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/animals" className="link">Animals</NavLink>
            </li>
            <li>
              <NavLink to="/birds" className="link">Birds</NavLink>
            </li>
          </ul>
        </nav>
        </header>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}
}

export default App;


/* export default App;

import React, { Component } from 'react';
import { animals } from "./animalsList";
import Animals from './Animals';
import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';



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
      <BrowserRouter>
      <div>
        <Header/>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Animals" className="link">Animals</NavLink>
            </li>
            <li>
              <NavLink to="/Birds" className="link">Birds</NavLink>
            </li>
          </ul>
        </nav>
        <main className="animals">
        <Animals 
        data={this.state.animals}
        removeHandler={this.removeHandler}
        likesHandler={this.likesHandler}
        searchHandler={this.searchHandler}
        searchInput={this.state.searchInput}
        />
        </main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Animals" element={<Animals/>}/>
          <Route path="/Birds" element={<Birds/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App; */