import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="home">
        <div className="select">
          <Link to="/Animals">
            <h1>Animals</h1>
          </Link>
        </div>
        <div className="select">
          <Link to="/Birds">
            <h1>Birds</h1>
          </Link>
        </div>
      </div>
    );
  };


export default Home;