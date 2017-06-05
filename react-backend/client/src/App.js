import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Events from './components/Events';
import SelectedEvent from './components/SelectedEvent';

// const API_KEY = 'sk_live_210eb57e6b95e5143c492a219091c4e5'; // Thomas'


const API_KEY = 'sk_live_f1090aeab90d8ed651128084abf4684f'; // Picatic Code Challenge

// 575569
// https://api.picatic.com/v2/event?filter[user_id]=575569&page[limit]=12&page[offset]=0

class App extends Component {
  state = {
    events: [],
    selectedEvent: {},
    tickets: [],
    editTicketId: null
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

  getTickets(id){
    fetch(`https://api.picatic.com/v2/ticket_price?filter\[event_id\]=${id}&page\[limit\]=10&page\[offset\]=0`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    .then(res => res.json())
    .then(tickets => this.setState({ tickets: tickets.data }));
  }

  handleSelect = (event) => {
    this.getTickets(event.id);
    this.setState({ selectedEvent: event, editTicketId: null });
  }

  handleEdit = (id) => {
    const saveId = id === this.state.editTicketId;
    saveId ? (
      this.setState({ editTicketId: null })
    ) : this.setState({ editTicketId: id });
  }



  render() {
    const { events, selectedEvent, tickets, editTicketId } = this.state;
    return (
      <MuiThemeProvider>
        <div className="container-fluid">
          <div className="row">

            {/* SideBar */}
            <div className="col-sm-4 col-md-4 col-lg-2 manage_content_sidebar_events px-0">
              <div className="col manage_content_sidebar_top">
                <span className="manage_content_sidebar_top_heading">
                  Select an Event
                </span>
              </div>
              <div className="pt-3">
                <Events
                  events={events}
                  handleSelect={this.handleSelect}
                />
              </div>
            </div>

            {/* Manage Event */}
            <div className="col-sm-8 col-md-9 col-lg-10">
              <SelectedEvent
                event={selectedEvent}
                tickets={tickets}
                editTicketId={editTicketId}
                handleEdit={this.handleEdit}
              />
            </div>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
