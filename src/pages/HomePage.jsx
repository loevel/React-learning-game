import React from 'react';
import { Link } from 'react-router-dom';
                                          
const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the React Learning Game</h1>
      <p>Learn the basics of React through interactive missions and challenges.</p>
      <Link to="/game">
        <button>Start Game</button>
      </Link>
    </div>
  );
};

export default HomePage;
