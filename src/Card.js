import React from "react";
import './Card.css';
import {FaHeart, FaHeartBroken, FaThumbsDown, FaThumbsUp} from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";


const Card = (props) => {
  const imgUrl = `https://source.unsplash.com/500x400/?${props.name}`;

  return (
    <div className="card">
      <div className="imgContainer" style={{ background: `url(${imgUrl}) center/cover` }}>
      </div>
      <h3 className="name">{props.name}</h3>
      <div className="likes">
  <button onClick={props.onDislike}><FaThumbsDown size="25px" color="gray"/></button>
  {props.likes >= 0 ? (
    <span className="likesCount">
      <FaHeart color= "red" size= "25px"/>
      <span className="likesValue">{props.likes}</span>
    </span>
  ) : (
    <span className="likesCount">
      <FaHeartBroken color= "gray" size= "25px"/>
      <span className="likesValue">{props.likes}</span>
    </span>
  )}
  <button onClick={props.onLike}><FaThumbsUp color="green" size= "25px"/></button>
</div>
      <button className="removeBtn" onClick={props.onRemove}><IoMdCloseCircle color="linear-gradient(to bottom right, #ff0000, #ffffff)"size= "2.5rem"/></button>
    </div>
  );
};

export default Card;