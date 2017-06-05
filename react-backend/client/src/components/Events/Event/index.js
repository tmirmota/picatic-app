import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

export default ({ event, handleSelect }) => {
  const attr = event.attributes;
  return (
    <MenuItem href="#" className="nav-link px-0" onClick={() => handleSelect(event)}>
        <p>{attr.title}</p>
        <p>{attr.end_date}</p>
        <i className="fa fa-chevron-right float-right"></i>
      <hr />
    </MenuItem>
  )
}
