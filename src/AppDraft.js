import logo from './logo.svg';
import React from 'react';
import { Button, Container, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import './App.css';
/*global sketchup*/



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMaterial: "Default"
    }
    window.test = this.test;
  }

  handleMaterialSelect = (evtKey, evt) => {
    // Get the selectedIndex in the evtKey variable
    this.setState({ selectedMaterial: evtKey });
  }

  render() {
    return (
      <React.Fragment>
        <Container style={{
          margin: 10
        }}>

          {/* Material Properties code -- start */}

          <h6>Text Description</h6>

          <p>{this.state.selectedvalue}</p>
          <p>{this.state.selectedMaterial}</p>

          <form action="/action_page.php">
            <textarea name="message" rows="3" cols="30">no material selected</textarea>
            <br></br>
          </form>

          <h6>Material Type</h6>

          <br></br>

          <DropdownButton
            alignRight
            title="Materials"
            id="dropdown-menu-align-right"
            onSelect={this.handleMaterialSelect}
          >
            <Dropdown.Item eventKey="Default">Default</Dropdown.Item>
            <Dropdown.Item eventKey="Metallic">Metallic</Dropdown.Item>
            <Dropdown.Item eventKey="LEM">LEM</Dropdown.Item>
          </DropdownButton>

          {
            this.state.selectedMaterial === "LEM" ?
              <div>
                <h6>LEM</h6>

                <Form>
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>Light Power</Form.Label>
                    <Form.Control type={"range"} min="1" max="100" />
                  </Form.Group>
                </Form>

                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check label="High Sensitivity" type={type} id={`inline-${type}-1`} />
                    </div>
                  ))}
                </Form>

                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check label="Hidden" type={type} id={`inline-${type}-1`} />
                    </div>
                  ))}
                </Form>

              </div>
              :
              <div>
                <h6>Basic Properties</h6>

                <Form>
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>Diffuse</Form.Label>
                    <Form.Control type={"range"} min="1" max="100" />
                  </Form.Group>
                </Form>

                <Form>
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>Transparency</Form.Label>
                    <Form.Control type={"range"} min="1" max="100" />
                  </Form.Group>
                </Form>

                <Form>
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>Reflection</Form.Label>
                    <Form.Control type={"range"} min="1" max="100" />
                  </Form.Group>
                </Form>

                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check label="Blurred Reflection" type={type} id={`inline-${type}-1`} />
                    </div>
                  ))}
                </Form>

                <DropdownButton
                  alignRight
                  title="Refraction"
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="None">None</Dropdown.Item>
                  <Dropdown.Item eventKey="Glass">Glass</Dropdown.Item>
                  <Dropdown.Item eventKey="Plexiglass">Plexiglass</Dropdown.Item>
                  <Dropdown.Item eventKey="Water">Water</Dropdown.Item>
                  <Dropdown.Item eventKey="Chrome">Chrome</Dropdown.Item>
                  <Dropdown.Item eventKey="Steel">Steel</Dropdown.Item>
                  <Dropdown.Item eventKey="Aluminum">Aluminum</Dropdown.Item>
                  <Dropdown.Item eventKey="Ceramic">Ceramic</Dropdown.Item>
                  <Dropdown.Item eventKey="Gold">Gold</Dropdown.Item>
                  <Dropdown.Item eventKey="Silver">Silver</Dropdown.Item>
                  <Dropdown.Item eventKey="Copper">Copper</Dropdown.Item>
                  <Dropdown.Item eventKey="Diamond">Diamond</Dropdown.Item>
                  <Dropdown.Item eventKey="Oil">Oil</Dropdown.Item>
                  <Dropdown.Item eventKey="Jade">Jade</Dropdown.Item>
                  <Dropdown.Item eventKey="Custom">Custom</Dropdown.Item>
                </DropdownButton>

                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check label="Blurred Transparency (translucence)" type={type} id={`inline-${type}-1`} />
                    </div>
                  ))}
                </Form>

                <Form>
                  <Form.Group controlId="formBasicRange">
                    <Form.Label>Bump Depth</Form.Label>
                    <Form.Control type={"range"} min="1" max="100" />
                  </Form.Group>
                </Form>
              </div>
          }

          <h6>Advanced</h6>

          <DropdownButton
            alignRight
            title="Edge Smoothing"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="Default">Default</Dropdown.Item>
            <Dropdown.Item eventKey="None">None</Dropdown.Item>
            <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
            <Dropdown.Item eventKey="Standard">Standard</Dropdown.Item>
            <Dropdown.Item eventKey="High">High</Dropdown.Item>
            <Dropdown.Item eventKey="Ultra">Ultra</Dropdown.Item>
          </DropdownButton>

          <Form>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check label="Cast Shadows" type={type} id={`inline-${type}-1`} />
              </div>
            ))}
          </Form>

          <Button type="button" variant="dark" >
            Apply
          </Button>
          <Button type="button" variant="dark" >
            Close
          </Button>

          {/* Material Properties code -- end */}


        </Container>
      </React.Fragment>
    )
  }

  passParamsTest = (e) => {
    if (sketchup !== undefined) {
      sketchup.passParamsTest('one|two|three');
    }
  }

  commandJavascriptTest = (e) => {
    if (sketchup !== undefined) {
      sketchup.commandJavascriptTest();
    }
  }

  test = () => {
    console.log("test from sketchup");
  }
}

export default App;
