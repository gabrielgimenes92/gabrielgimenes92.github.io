import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <ul>
          <li>
            <Link href="/adventurebc">AdventureBC</Link>
          </li>
          <li>
            <Link href="/billy">Billy</Link>
          </li>
          <li>
            <Link href="/bullet-journal">Bullet Journal</Link>
          </li>
          <li>
            <Link href="/everypage">EveryPage</Link>
          </li>
          <li>
            <Link href="/finance-tracker">Finance Tracker</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/py-game">Py Game</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default NavBar;
