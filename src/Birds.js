import React from 'react';
import Card from './Card';
import './Animals.css';
import Search from './Search';

const Birds = (props) => {
const searchFilter = props.data.filter(bird => {
  return bird.name.includes(props.searchInput)
})


  return (
    <div>
     <div className="top">
      <h2>Birds</h2>
     <Search searchHandler={props.searchHandler} />
      </div>
    <div className="cards">
      {searchFilter.map((item) => <Card
      key={item.name}
      name={item.name} 
      likes={item.likes} 
      onRemove={()=>props.removeHandler(item.name, 'birds')}
      onLike={()=>props.likesHandler(item.name, 'plus', 'birds')}
      onDislike={()=>props.likesHandler(item.name, 'minus', 'birds')}/>)}
    </div>
    </div>
  );
};

export default Birds;