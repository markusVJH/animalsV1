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
      <header>
      <h2>Birds {props.data.length}</h2>
     <Search searchHandler={props.searchHandler} />
     </header>
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

export default Birds;