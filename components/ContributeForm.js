import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";

class ContributeForm extends Component {
  state = {
    value: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => setState({ value: event.target.value })}
            label="ETH"
            labelPosition="right"
          />
          <Button primary>Contribute!</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default ContributeForm;
