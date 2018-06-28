import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
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
        <div className="App">
          <LocationList cities={cities} ></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
