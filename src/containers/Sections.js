import { connect } from 'react-redux';
import SectionList from '../components/SectionList';

const mapStateToProps = state => ({
  sections: state.sections,
});

const Sections = connect(mapStateToProps)(SectionList);

export default Sections;
