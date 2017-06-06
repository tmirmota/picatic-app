import React from 'react';
import moment from 'moment';
import './Event.css';

// Material UI Components
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

// Styles to overwrite MenuItem component
const styles = {
  menuItem: {
    lineHeight: '18px',
    height: '64px'
  },
  innerDiv: {
    paddingTop: '14px',
  }
}

export default ({ event, handleSelect }) => {

  // Destructure attributes
  const attr = event.attributes;

  // Format date using moment library
  const day = moment(attr.end_date).format('MMM D YYYY');

  return (
    <div>
      <MenuItem
        style={styles.menuItem}
        innerDivStyle={styles.innerDiv}
        onClick={() => handleSelect(event)}>
        <div className="row align-items-center">
          <div className="col-9 sidebar_event">
            <span className="sidebar_event_title">{attr.title}</span>
            <br/>
            <span className="sidebar_event_date">{day}</span>
          </div>
          <div className="col-3">
            <ChevronRight className="float-right"/>
          </div>
        </div>
      </MenuItem>
      <div className="col">
        <Divider />
      </div>
    </div>
  )
}
