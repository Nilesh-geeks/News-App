import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pagesize = 15
  apiKey = process.env.REACT_API_KEY
  state = {
    progress: 0
  }
  Setprogress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar titl="News App" />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News Setprogress={this.Setprogress} apiKey={this.apiKey}  key="general" pagesize={this.pagesize} country="in" category="general" />} />
            <Route exact path="/general" element={<News Setprogress={this.Setprogress} apiKey={this.apiKey}  key="general" pagesize={this.pagesize} country="in" category="general" />} />
            <Route exact path="/business" element={<News Setprogress={this.Setprogress} apiKey={this.apiKey}  key="business" pagesize={this.pagesize} country="in" category="business" />} />
            <Route exact path="/technology" element={<News Setprogress={this.Setprogress} apiKey={this.apiKey}  key="technology" pagesize={this.pagesize} country="in" category="technology" />} />
            <Route exact path="/entertainment" element={<News Setprogress={this.Setprogress} apiKey={this.apiKey}  key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News Setprogress={this.Setprogress} apiKey={this.apiKey}  key="health" pagesize={this.pagesize} country="in" category="health" />} />
            <Route exact path="/science" element={<News Setprogress={this.Setprogress} apiKey={this.apiKey}  key="science" pagesize={this.pagesize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News Setprogress={this.Setprogress} apiKey={this.apiKey}  key="sports" pagesize={this.pagesize} country="in" category="sports" />} />
          </Routes>
        </Router>

      </div>
    )
  }
}



