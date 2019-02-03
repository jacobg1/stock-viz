import React, { Component } from 'react'
import './App.css'
import AddPieChart from '../containers/AddPieChart'
import VisiblePieChartList from '../containers/VisiblePieChartList'

class Charts extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddPieChart />
          <VisiblePieChartList />
        </header>
      </div>
    )
  }
}

export default Charts
