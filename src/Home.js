import React from 'react';
import Main from './Main.js';
import Heading from './Heading';

function Home() {
    return (
      <div className="home">
        <div className="home-cover">
        <div className="heading-box">
            <Heading />
        </div>
          <Main />
        </div>
      </div>
    );
}

export default Home
