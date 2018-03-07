import React from 'react';
import PropTypes from 'prop-types';
import Bucket from './Bucket';

const BucketList = ({ buckets }) => (
  <ol>
    {buckets.map(bucket => (
      <Bucket key={bucket.id} {...bucket} />
    ))}
  </ol>
);

BucketList.propTypes = {
  buckets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired).isRequired,
};

export default BucketList;
