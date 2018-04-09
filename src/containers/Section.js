import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';
import AddBucket from './AddBucket';

class Section extends Component {
  state = { showBucket : false  }
  Click = (e) => {
    const props = this.props
    this.setState({showBucket: !this.state.showBucket})
  }
  render() {
    const { title, id } = this.props
    return (
      <div>
        <ListGroupItem onClick={this.Click}style={{ color: 'black' }}> {title} </ListGroupItem>
        {this.state.showBucket  && < AddBucket />}
      </div>
    );
  }
}

Section.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;