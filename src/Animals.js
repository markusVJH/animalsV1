import React from 'react';
import Card from './Card';
import './Animals.css';
import Search from './Search';

const Animals = (props) => {
const searchFilter = props.data.filter(animal => {
  return animal.name.includes(props.searchInput)
})


  return (
    <div>
      <h2>Animals {props.data.length}</h2>
     <Search searchHandler={props.searchHandler} />
    <div className="cards">
      {searchFilter.map((item) => <Card
      key={item.name}
      name={item.name} 
      likes={item.likes} 
      onRemove={()=>props.removeHandler(item.name)}
      onLike={()=>props.likesHandler(item.name, 'plus')}
      onDislike={()=>props.likesHandler(item.name, 'minus')}/>)}
    </div>
    </div>
  );
};

export default Animals;