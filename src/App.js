import logo from './logo.svg';
import React from 'react';
import { Button, Container, Form, Dropdown } from 'react-bootstrap';
import './App.css';
/*global sketchup*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    window.test = this.test;
  }
  render() {
    return (
      <React.Fragment>
        <Container style={{
          margin: 10
        }}>

          {/* Material Properties code -- start */}

          <h6>Text Description</h6>

          <form action="/action_page.php">
            <textarea name="message" rows="3" cols="30">no material selected</textarea>
            <br></br>
          </form>

          <h6>Material Type</h6>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Materials
                </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="button">  Default  </Dropdown.Item>
              <Dropdown.Item as="button">  Metallic </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h6>Text Description</h6>
          <h6>Text Description</h6>
          <h6>Text Description</h6>

          <h6>Basic Properties</h6>

          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Diffuse</Form.Label>
              <Form.Control type={"range"} min="1" max="100" value="50" />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Transparency</Form.Label>
              <Form.Control type={"range"} min="1" max="100" value="50" />
            </Form.Group>
          </Form>

          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Reflection</Form.Label>
              <Form.Control type={"range"} min="1" max="100" value="50" />
            </Form.Group>
          </Form>


          <Form>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check label="Blurred Reflection" type={type} id={`inline-${type}-1`} />
              </div>
            ))}
          </Form>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Refraction
                </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="button">  None  </Dropdown.Item>
              <Dropdown.Item as="button">  Glass </Dropdown.Item>
              <Dropdown.Item as="button">  Plexiglass </Dropdown.Item>
              <Dropdown.Item as="button">  Water </Dropdown.Item>
              <Dropdown.Item as="button">  Chrome </Dropdown.Item>
              <Dropdown.Item as="button">  Steel </Dropdown.Item>
              <Dropdown.Item as="button">  Aluminum  </Dropdown.Item>
              <Dropdown.Item as="button">  Ceramic </Dropdown.Item>
              <Dropdown.Item as="button">  Gold </Dropdown.Item>
              <Dropdown.Item as="button">  Silver </Dropdown.Item>
              <Dropdown.Item as="button">  Copper </Dropdown.Item>
              <Dropdown.Item as="button">  Diamond </Dropdown.Item>
              <Dropdown.Item as="button">  Oil </Dropdown.Item>
              <Dropdown.Item as="button">  Jade </Dropdown.Item>
              <Dropdown.Item as="button">  Custom </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check label="Blurred Transparency (tranlucence)" type={type} id={`inline-${type}-1`} />
              </div>
            ))}
          </Form>

          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Bump Depth</Form.Label>
              <Form.Control type={"range"} min="1" max="100" value="50" />
            </Form.Group>
          </Form>

          <h6>LEM</h6>

          <Form>
            <Form.Group controlId="formBasicRange">
              <Form.Label>Light Power</Form.Label>
              <Form.Control type={"range"} min="1" max="100" value="50" />
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

          <h6>Advanced</h6>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Edge Smoothing
                </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="button">  Default  </Dropdown.Item>
              <Dropdown.Item as="button">  None </Dropdown.Item>
              <Dropdown.Item as="button">  Low </Dropdown.Item>
              <Dropdown.Item as="button">  Standard </Dropdown.Item>
              <Dropdown.Item as="button">  High </Dropdown.Item>
              <Dropdown.Item as="button">  Ultra </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
