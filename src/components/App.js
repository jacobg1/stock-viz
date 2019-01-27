import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AddPieChart from '../containers/AddPieChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddPieChart />
        </header>
      </div>
    )
  }
}

export default App
