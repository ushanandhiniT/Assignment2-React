import React, { Component } from 'react'
import "./styles.css"
import Header from './Header'
import TrendingPost from './TrendingPost'


export class App extends Component {

  render() {
    return (
      <div>

        <Header />
        <TrendingPost />
      </div>
    )
  }
}

export default App
