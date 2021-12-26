import React from 'react';
import Main from './Main.js';
import Heading from './Heading';

function Home() {
    return (
      <div className="home">
        <div className="heading-cover">
          <div className="heading-box">
            <Heading />
          </div>
        </div>
        <Main />
      </div>
    );
}

export default Home
