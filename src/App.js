import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import EventGenre from "./EventGenre";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import "./nprogress.css";
import Row from "react-bootstrap/Row";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    locationSelected: "all",
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
  };

  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
      eventCount = this.state.numberOfEvents;
    } else this.setState({ numberOfEvents: eventCount });
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      let locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        locationSelected: location,
      });
    });
  };

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  setNumberOfEvents(value) {
    this.setState({
      numberOfEvents: value,
    });
    this.updateEvents(undefined, this.state.numberOfEvents);
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events, locations: extractLocations(events) });
      }
    });
  }
}

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events } = this.state;
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    return (
      <div className="App">
        <div className="title-wrapper">
          <h1 className="title-text">Meet App</h1>
          <h3 className="slogan">THE BEST SUGGESTED EVENTS NEAR YOU</h3>
        </div>
        <div className="input-wrapper">
              <CitySearch
                locations={this.state.locations}
                updateEvents={this.updateEvents}
              />
              <NumberOfEvents
                numberOfEvents={this.state.numberOfEvents}
                setNumberOfEvents={this.setNumberOfEvents}
              />
        </div>
        <div className="data-wrapper">
            <div className="data-vis-wrapper">
            <EventGenre className="pie-chart" events={events} />
            <ResponsiveContainer height={400} >
          <ScatterChart
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid stroke="#18534c"/>
          <XAxis type="category" dataKey="city" name="city" stroke="#c0eec0" />
          <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" stroke="#c0eec0"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#F194B4" />
        </ScatterChart>
        </ResponsiveContainer>
        </div>
        </div>
          <Row className="events-wrapper">
          <EventList events={this.state.events} />
          </Row>
          <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
