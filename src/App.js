import React, { Component } from 'react';
import './App.css';

// Material UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Events from './components/Events';
import SelectedEvent from './components/SelectedEvent';

// Alternate API KEY - Thomas Mirmotahari
// const API_KEY = 'sk_live_210eb57e6b95e5143c492a219091c4e5';

// Picatic Code Challenge API KEY
// TODO: Store API Key on the server
const API_KEY = 'sk_live_f1090aeab90d8ed651128084abf4684f';

// 575569

export default class App extends Component {
  state = {
    events: [],
    selectedEvent: {},
    tickets: [],
    editTicketId: null
  }

  componentDidMount(){
    // TODO: push in user id based on the owner of the authorization key
    fetch('https://api.picatic.com/v2/event?filter[user_id]=575569&page[limit]=12&page[offset]=0', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    .then(res => res.json())
    .then(events => this.setState({ events: events.data }));
  }

  getTickets(id){
    // Fetch tickets for an event based on the id
    fetch(`https://api.picatic.com/v2/ticket_price?filter\[event_id\]=${id}&page\[limit\]=10&page\[offset\]=0`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })
    .then(res => res.json())
    .then(tickets => this.setState({ tickets: tickets.data }));
  }

  // The use of arrow functions is to bind this for handle Select, Edit & Save

  handleSelect = (event) => {
    this.getTickets(event.id);
    this.setState({
      selectedEvent: event,
      editTicketId: null
    });
  }

  handleEdit = (id) => {
    this.setState({ editTicketId: id });
  }

  handleSave = (id, newTicket) => {

    console.log(id, newTicket);

    // fetch(`https://api.picatic.com/v2/ticket_price/${id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Authorization': `Bearer ${API_KEY}`,
    //     'mode': 'cors'
    //   },
    //   body: JSON.stringify(
    //     { "data":
    //       {"attributes":
    //         newTicket
    //       }
    //     }
    //   )
    // })
    // .then(res => console.log(res))
    // .catch(res => console.log(res))

    this.setState({ editTicketId: null });
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
                handleSave={this.handleSave}
              />
            </div>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
