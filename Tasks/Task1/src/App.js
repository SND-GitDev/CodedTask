import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import { FaApple } from "react-icons/fa";

export default function Apple () {

  const [color, setColor] = useState("grey");

  return (
    <Card className="card border-light mb-3 text-center">
      <Card.Body className="shadow p-3 mb-5 bg-white rounded align-middle">
        <div><FaApple size={200} color={color}/></div>
        <div>
          <Button variant="primary" onClick = {() => setColor("blue")}>Blue</Button>
          <Button variant="success" onClick = {() => setColor("green")}>Green</Button>
          <Button variant="danger" onClick = {() => setColor("red")}>Red</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
