import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
