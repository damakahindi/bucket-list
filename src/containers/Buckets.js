import { connect } from 'react-redux';
import BucketList from '../components/BucketList';

const mapStateToProps = state => ({
  buckets: state.buckets,
});

const Buckets = connect(mapStateToProps)(BucketList);

export default Buckets;
