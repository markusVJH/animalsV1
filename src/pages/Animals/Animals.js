import React from 'react';
import Card from '../../UI/Card/Card';
import './Animals.css';
import Search from '../../UI/Search/Search';
import GoTop from '../../UI/Top/Top';


const Animals = (props) => {
const searchFilter = props.data.filter(animal => {
  return animal.name.includes(props.searchInput)
})


  return (
    <div>
      <div className="top">
        <h2>Animals</h2>
        <GoTop/>
        <Search searchHandler={props.searchHandler} />
      </div>
    <div className="cards">
      {searchFilter.map((item) => <Card
      key={item.name}
      name={item.name} 
      likes={item.likes} 
      onRemove={()=>props.removeHandler(item.name, 'animals')}
      onLike={()=>props.likesHandler(item.name, 'plus', 'animals')}
      onDislike={()=>props.likesHandler(item.name, 'minus', 'animals')}/>)}
    </div>
    </div>
  );
};

export default Animals;