import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function FAQ() {
  return (
    <div className="App">
     
      <h2>Which pear product are you using?</h2>
      
      <Link to= '/ChatBox'>
      <li>pearPhone</li>
      </Link>
      
      <Link to= '/ChatBox'>
      <li>pearPad</li>
      </Link>

      <Link to= '/ChatBox'>
      <li>pearPro</li>
      </Link>

    </div>
  );
}

export default FAQ;
