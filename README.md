# Repo Notes

## Slide Notes:
  1)Slide   1:      Intro  
  2)Slides  2-7:    Analogies of State  
  3)Slides  8-13:   Bounderies of States & Violations  
  4)Slides  14-18:  React UI Examples  
  
## Demo #1
  Steps:
    
    1) Using npm or yarn, Create a new React App
    2) Download the following packages:
        
        "@fortawesome/fontawesome-svg-core": "^1.2.36"
        "@fortawesome/free-solid-svg-icons": "^5.15.4"
        "@fortawesome/react-fontawesome": "^0.1.16"
        "@testing-library/jest-dom": "^5.11.4"
        "@testing-library/react": "^11.1.0"
        "@testing-library/user-event": "^12.1.10"
        "bootstrap": "5.1.3"
        "react": "^17.0.2"
        "react-bootstrap": "^2.0.2"
        "react-dom": "^17.0.2"
        "react-icons": "^4.3.1"
        "react-scripts": "4.0.3"
        "web-vitals": "^1.0.1"
        
    3) Open App Directory
    4) Open Src/App.js
    5) Import the following libraries:
      ```
        import React from 'react'
        import Button from 'react-bootstrap/Button';
        import Card from 'react-bootstrap/Card'
        import { FaApple } from "react-icons/fa";
      ```
    6) Rename the App Component to Apple
    7) In the render() function, Clear the return statement body
    8) In the return(), enter the following element:
      ```
        <Card className="card border-light mb-3 text-center">
          <Card.Body className="shadow p-3 mb-5 bg-white rounded align-middle">
            
          </Card.Body>
        </Card>
      ```
    9) Above the render() function and inside the Apple Component Body, write the constructor function:
      ```
        constructor(props) {
        super(props);
      }
      ```
    10) Inside the constructor, write down the intial state:
      ```
        this.state = {color: "grey"};
      ```
    11) Back inside the return statement, in the body of the Card Component, Write down the following:
      ```
        <div>
          <FaApple size={200} color={this.state.color}/>
        </div>
        <div>
          <Button variant="primary" onClick = {() => this.setState({color: "blue"})}>Blue</Button>
          <Button variant="success" onClick = {() => this.setState({color: "green"})}>Green</Button>
          <Button variant="danger" onClick = {() => this.setState({color: "red"})}>Red</Button>
        </div>
      ```
    12) Open the command line prompt
    13) Change Directory to Application Directory that includes src folder
    14) Type yarn start if you are using yarn package manager. Or npm start if you are using npm
    
## Demo #2
    This demo was added for the sake of showing a Form example and not for reconstruction by the students.

## Task
    After replicating the App from Demo 1, Convert the app to use React State Hook instead of explicitly declaring the state.
    
    Steps:
      1) Change the following line:
        ```
          export default class Apple extends React.Component
        ```
        To
        ```
          export default function Apple ()
        ```
      2) Import the state hook by changing:
        ```
          import React from 'react'
        ```
      To
        ```
          import React, { useState } from 'react'
        ```
      3) Delete the constructor function 
      4) Write the following line in the body of the Component, before the render function:
      ```
        const [color, setColor] = useState("grey");
      ```
      5) Delete the render() function but keep the return statement and its content
      6) Replace occurances of "this.state.color" with "color"
      7) Replace
        ```
          this.setState({color: "blue"})
        ```
        with
        ```
          setColor("blue")
        ```
      8) Repeat the same for the other 2 colors
      9) Open the command line prompt
      10) Change Directory to Application Directory that includes src folder
      11) Type yarn start if you are using yarn package manager. Or npm start if you are using npm

### Common Pitfalls:
  1) Createing a constructor BUT forgetting to pass the props
  2) Createing a constructor BUT forgetting call the super function
  3) Createing a constructor BUT forgetting call the super function with props
  4) When using State Hooks, forgetting to change from React.Component to function Component
  5) Function components DO NOT use constructor() nor render(), but still require a return()
  6) Mixing up css style sheets and bootstrap className properties