import React from 'react';
import { Link } from '@reach/router';

function Navigation(props) {
  const { items } = props;

  return (
    <nav>
      <ul>
        {items.map(it => (
          <li key={it.slug}>
            <Link to={it.slug}>{it.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
