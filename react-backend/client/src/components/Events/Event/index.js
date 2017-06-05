import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

export default ({ event, handleSelect }) => {
  const attr = event.attributes;
  return (
    <MenuItem onClick={() => handleSelect(event)}>
      <div className="row align-items-center">
        <div className="col-9">
          <span>{attr.title}</span>
          <br/>
          <span>{attr.end_date}</span>
        </div>
        <div className="col-3">
          <ChevronRight className="float-right"/>
        </div>
      </div>
      <Divider />
    </MenuItem>
  )
}
