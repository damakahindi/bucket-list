import React from 'react';
import PropTypes from 'prop-types';

const Bucket = ({ title, description }) => (
  <li> {title}:{description}  </li>
);

Bucket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Bucket;
