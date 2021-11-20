import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import { FaApple } from "react-icons/fa";

export default class Apple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: "grey"};
  }

  render() {
    return (
      <Card className="card border-light mb-3 text-center">
        <Card.Body className="shadow p-3 mb-5 bg-white rounded align-middle">
          <div><FaApple size={200} color={this.state.color}/></div>
          <div>
            <Button variant="primary" onClick = {() => this.setState({color: "blue"})}>Blue</Button>
            <Button variant="success" onClick = {() => this.setState({color: "green"})}>Green</Button>
            <Button variant="danger" onClick = {() => this.setState({color: "red"})}>Red</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
