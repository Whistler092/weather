import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { Paper, AppBar } from 'material-ui';
import './App.css';

const cities = [
  'Cali,col',
  'Buenos Aires,ar',
  'Bogota,col',
  'Washington DC., US',
  'Ciudad de México,mx',
  'Madrid,es',
  'Santiago, CL'
];

class App extends Component {

  constructor(){
    super();

    this.state = {
      city : 'Nueva Ciudad!'
    };
  }

  handleSelectedLocation = city =>{
    this.setState({ city });
    /*console.log("handleSelectedLocation", city);*/
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid >
          <Row>
            <Col xs={12}>
              <AppBar title="Weather App" />
            </Col>
          </Row>
          <Row >
            <Col xs={12} md={6} >
              <LocationList cities={cities} 
                onSelectedLocation={this.handleSelectedLocation}></LocationList>
            </Col>
            <Col xs={12} md={6} >
              <Paper zDepth={4}>
                <div className="detail"> 
                  <ForecastExtended city={city} />
                </div>
              </ Paper>
            </Col>
          </Row> 
        </ Grid >
      </MuiThemeProvider>
    );
  }
}

export default App;
