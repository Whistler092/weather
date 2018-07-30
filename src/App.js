import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

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

  render() {
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
              <LocationListContainer cities={cities} ></LocationListContainer>
            </Col>
            <Col xs={12} md={6} >
              <Paper zDepth={4}>
                <div className="detail"> 
                    <ForecastExtendedContainer /> 
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
