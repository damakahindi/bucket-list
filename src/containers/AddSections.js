import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { addSections } from '../actions';

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
    const { dispatch } = this.props;
    event.preventDefault();
    if (!event.target.title.value || !event.target.title.value.trim()) {
      return;
    }
    dispatch(addSections({ title: event.target.title.value, description: event.target.description.value }));
  }
  render() {
    return (
      <div style={{ color: 'white', width: '300px' }}>
        <h1> Add Section </h1>
        <form
          onSubmit={this.handleaddSection}
        >
          <FieldGroup
            id="title"
            type="text"
            label="Title"
            name="title"
            placeholder="Enter Title"

          />
          <FieldGroup
            id="description"
            label="Description"
            name="description"
            type="text"
            placeholder="Enter Description"
          />
          <Button type="submit">
          Add Section
          </Button>
        </form>
      </div>
    );
  }
}

AddSection = connect()(AddSection);

export default AddSection;

