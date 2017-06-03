import React from 'react';

export default ({ event }) => {
  const attr = event.attributes;
  return (
    <div>
      <h1>{attr.title}</h1>
      <h3>{attr.status}</h3>
    </div>
  )
}
