import React from 'react';

export default ({ event, handleSelect }) => {
  const attr = event.attributes;
  return (
    <li className="nav-item">
      <a href="#" className="nav-link" onClick={() => handleSelect(event)}>
        <h1>{attr.title}</h1>
      </a>
    </li>
  )
}
