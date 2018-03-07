import React, { Component } from 'react';
import AddSections from '../containers/AddSections';
import Sections from '../containers/Sections';
import Buckets from '../containers/Buckets';

class Dashboard extends Component {
  render() {
    return (
      <div style={{ color: 'white' }}>
        <AddSections />
        <h1> Section List </h1>
        <Sections />
        <Buckets />
      </div>
    );
  }
}

export default Dashboard;
