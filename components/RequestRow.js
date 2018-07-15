import React, { Component } from "react";
import { Table, Button, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";
import { Router } from "../routes";

class RequestRow extends Component {
  state = {
    approveLoading: false,
    finalizeLoading: false
  };

  onApprove = async () => {
    event.preventDefault();

    this.setState({ approveLoading: true });
    try {
      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
      this.setState({ approveLoading: false });
    } catch (err) {
      this.setState({ approveLoading: false });
    }
  };

  onFinalize = async () => {
    event.preventDefault();

    this.setState({ finalizeLoading: true });
    try {
      const campaign = Campaign(this.props.address);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
      this.setState({ finalizeLoading: false });
    } catch (err) {
      this.setState({ finalizeLoading: false });
    }
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalsCount > approversCount / 2;

    return (
      <Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
      >
        <Cell>{this.props.id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalsCount}/{approversCount}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button
              color="green"
              loading={this.state.approveLoading}
              basic
              onClick={this.onApprove}
            >
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button
              color="teal"
              loading={this.state.finalizeLoading}
              basic
              onClick={this.onFinalize}
            >
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
