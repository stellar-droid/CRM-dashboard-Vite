// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani

import { React, useEffect, useState, useRef } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../css/Common.css";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import { Editor } from "primereact/editor";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { RadioButton } from 'primereact/radiobutton';
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';

const Settings = () => {
  const toast = useRef(null);
  const stepperRef = useRef(null);
  const [date, setDate] = useState(null);
  const [text, setText] = useState("");
  const [selectedCities, setSelectedCities] = useState(null);
  const [ingredient, setIngredient] = useState('');
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  useEffect(() => {
    console.log("Text Editor Changes", text);
  }, [text]);
  return (
    <>
      <div className="crm-header">
        <h2>Elements</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            <i className="bi bi-house-door"></i> Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Elements</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* ====================Form code start here===================== */}
      <Card>
        <Card.Header>
          Form
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>


              <Form.Group className="form-group mb-2 col-4" controlId="formGroupText">
                <Form.Label>Select Box</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Price List</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="form-group mb-2 col-4" controlId="formGroupText">
                <Form.Label>MultiSelect</Form.Label>
                <MultiSelect
                  value={selectedCities}
                  onChange={(e) => setSelectedCities(e.value)}
                  options={cities}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select Cities"
                  maxSelectedLabels={10}
                  className="w-full md:w-20rem"
                />
              </Form.Group>



              <Form.Group className="form-group mb-2 col-4" controlId="formGroupText">
                <Form.Label>Date Picker</Form.Label>
                <div className="calendar-block"><Calendar className="col-12" value={date} onChange={(e) => setDate(e.value)} /></div>
              </Form.Group>

              <Form.Group className="form-group mb-2 col-4" controlId="formGroupText">
                <Form.Label>File Upload</Form.Label>
                <div className="file-uploader">
                  <Toast ref={toast}></Toast>
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    maxFileSize={1000000}
                    onUpload={onUpload}
                  />
                </div>
              </Form.Group>

              <Form.Group className="form-group mb-2" controlId="formGroupText">
                <Form.Label>Editor</Form.Label>
                <Editor
                  value={text}
                  onTextChange={(e) => setText(e.htmlValue)}
                  style={{ height: "320px" }}
                />
              </Form.Group>



              <Form.Group className="mb-3">
                <Form.Label>Radio options</Form.Label>
                <div className="d-flex flex-wrap gap-3">
                  <div className="flex align-items-center">
                    <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                    <label htmlFor="ingredient1" className="ms-2">Cheese</label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                    <label htmlFor="ingredient2" className="ms-2">Mushroom</label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                    <label htmlFor="ingredient3" className="ms-2">Pepper</label>
                  </div>
                  <div className="flex align-items-center">
                    <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                    <label htmlFor="ingredient4" className="ms-2">Onion</label>
                  </div>
                </div>

              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Checkbox options</Form.Label>

              </Form.Group>

              <Col xl="6">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      {/* ====================Form Wizard code start here===================== */}
      <Card className="mt-3">
        <Card.Header>
          Form Wizard
        </Card.Header>
        <Card.Body>

          <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
            <StepperPanel header="Header I">
              <div className="d-flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

                  <Form>
                    <Row>
                      <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group className="mb-3 col-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>


                      <Form.Group className="form-group mb-2 col-4" controlId="formGroupText">
                        <Form.Label>Select Box</Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option>Select Price List</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="form-group mb-2 col-4" controlId="formGroupText">
                        <Form.Label>MultiSelect</Form.Label>
                        <MultiSelect
                          value={selectedCities}
                          onChange={(e) => setSelectedCities(e.value)}
                          options={cities}
                          optionLabel="name"
                          display="chip"
                          placeholder="Select Cities"
                          maxSelectedLabels={10}
                          className="w-full md:w-20rem"
                        />
                      </Form.Group>
                      <Form.Group className="form-group mb-2 col-4" controlId="formGroupText">
                        <Form.Label>Date Picker</Form.Label>
                        <div className="calendar-block"><Calendar className="col-12" value={date} onChange={(e) => setDate(e.value)} /></div>
                      </Form.Group>

                    </Row>
                  </Form>
                </div>
              </div>
              <div className="d-flex pt-4 justify-content-end">
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()}> Next <i class="bi bi-arrow-right"></i></Button>
              </div>
            </StepperPanel>
            <StepperPanel header="Header II">
              <div className="d-flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                  <Form>
                    <Row>
                      <Form.Group className="form-group mb-2" controlId="formGroupText">
                        <Form.Label>Editor</Form.Label>
                        <Editor
                          value={text}
                          onTextChange={(e) => setText(e.htmlValue)}
                          style={{ height: "320px" }}
                        />
                      </Form.Group>
                    </Row>
                  </Form>
                </div>
              </div>
              <div className="d-flex pt-4 justify-content-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}><i class="bi bi-arrow-left"></i> Prev </Button>
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} > Next <i class="bi bi-arrow-right"></i></Button>
              </div>
            </StepperPanel>
            <StepperPanel header="Header III">
              <div className="d-flex flex-column h-12rem">
                <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

                  <Form>
                    <Row>
                      <Form.Group className="mb-3">
                        <Form.Label>Radio options</Form.Label>
                        <div className="d-flex flex-wrap gap-3">
                          <div className="flex align-items-center">
                            <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                            <label htmlFor="ingredient1" className="ms-2">Cheese</label>
                          </div>
                          <div className="flex align-items-center">
                            <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                            <label htmlFor="ingredient2" className="ms-2">Mushroom</label>
                          </div>
                          <div className="flex align-items-center">
                            <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                            <label htmlFor="ingredient3" className="ms-2">Pepper</label>
                          </div>
                          <div className="flex align-items-center">
                            <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                            <label htmlFor="ingredient4" className="ms-2">Onion</label>
                          </div>
                        </div>

                      </Form.Group>
                    </Row>
                  </Form>

                </div>
              </div>
              <div className="d-flex pt-4 justify-content-start">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()}><i class="bi bi-arrow-left"></i> Prev </Button>
              </div>
            </StepperPanel>
          </Stepper>

        </Card.Body>
      </Card>

      {/* ====================Tabs code start here===================== */}
      <Card className="mt-3">
        <Card.Header>
          Tabs
        </Card.Header>
        <Card.Body>
          <div className='card-tabs'>

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-0">

              <Tab eventKey="home" title="Home">
                Tab content for Home
              </Tab>

              <Tab eventKey="profile" title="Profile">
                Tab content for Profile
              </Tab>
              <Tab eventKey="contact" title="Contact">
                Tab content for Contact
              </Tab>

            </Tabs>

          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Settings;
