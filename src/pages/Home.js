import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="home">
        <Link to="/Animals" className="link select">
            <h1>Animals</h1>
        </Link>
        <Link to="/Birds" className="link select">
            <h1>Birds</h1>
        </Link>
      </div>
    );
};

export default Home;