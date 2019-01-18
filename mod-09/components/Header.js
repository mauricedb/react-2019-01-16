import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        &nbsp;
        <Link href="/jokes">
          <a>Jokes</a>
        </Link>
      </div>
    );
  }
}

export default Header;
