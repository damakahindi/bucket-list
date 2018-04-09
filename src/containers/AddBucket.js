import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { addBuckets } from '../actions';

function FieldGroup({
  id, label, help, ...props
}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AddSection extends Component {
  handleaddSection = (event) => {
    const { dispatch, id } = this.props;
    event.preventDefault();
    if (!event.target.bucketTitle.value || !event.target.bucketTitle.value.trim()) {
      return;
    }
    dispatch(addBuckets({ title: event.target.bucketTitle.value, description: event.target.bucketDescription.value, sectionId:id }));
  }
  render() {
    return (
      <div style={{ color: 'white', width: '300px' }}>
        <h1> Add Bucket </h1>
        <form
          onSubmit={this.handleaddSection}
        >
          <FieldGroup
            id="bucketTitle"
            type="text"
            label="Bucket Title"
            name="bucketTitle"
            placeholder="Enter Title"

          />
          <FieldGroup
            id="bucketDescription"
            label="Bucket Description"
            name="bucketDescription"
            type="text"
            placeholder="Enter Description"
          />
          <Button type="submit">
          Add Bucket
          </Button>
        </form>
      </div>
    );
  }
}

AddSection = connect()(AddSection);

export default AddSection;

