import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Section from '../containers/Section';

const SectionList = ({ sections }) => (
  <ListGroup>
    {sections.map(section => (
      <Section key={section.id} {...section} />
    ))}
  </ListGroup>
);

SectionList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired).isRequired,
};

export default SectionList;
