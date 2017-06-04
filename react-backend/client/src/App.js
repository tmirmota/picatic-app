import React, { Component } from 'react';
import './App.css';

// Components
import Events from './components/Events';

// const API_KEY = 'sk_live_210eb57e6b95e5143c492a219091c4e5'; // Thomas'
const API_KEY = 'sk_live_f1090aeab90d8ed651128084abf4684f'; // Picatic Code Challenge

// 575569
// https://api.picatic.com/v2/event?filter[user_id]=575569&page[limit]=12&page[offset]=0

class App extends Component {
  state = {
    events: []
  }
  componentDidMount(){
    fetch('https://api.picatic.com/v2/event?filter[user_id]=575569&page[limit]=12&page[offset]=0', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    // fetch('http://localhost:3000/event?filter[user_id]=575569&page[limit]=12&page[offset]=0')
    .then(res => res.json())
    .then(events => this.setState({ events: events.data }));

  }
  render() {
    const { events } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 sidebar manager_content_sidebar_top">
            <div className="manager_content_sidebar_top text-white">
              <p className="text-white">Select an Event</p>
            </div>
            <Events events={events} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
