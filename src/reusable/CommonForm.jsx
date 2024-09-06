import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';

const CommonForm = ({ viewOnly }) => {
  const pricingOptions = [
    { value: '1', label: 'Pricing Option 1' },
    { value: '2', label: 'Pricing Option 2' },
    { value: '3', label: 'Pricing Option 3' },
  ];
  return (
    <>
      <Form>
        <Row>
          <Col xl="12">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Select Product</Form.Label>
              <Form.Select aria-label="Default select example" disabled={viewOnly}>
                <option>Select Product</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Pricing Level</Form.Label>
              <Form.Select aria-label="Default select example" disabled={viewOnly}>
                <option>Pricing</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Pricing List</Form.Label>
              <Select
                isMulti
                options={pricingOptions}
                isDisabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Purchase Cost</Form.Label>
              <Form.Control type="text" placeholder="Purchase Cost (One Time)" disabled={viewOnly} />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Purchase Currency</Form.Label>
              <Form.Select aria-label="Default select example" disabled={viewOnly}>
                <option>Purchase Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Purchase Cost</Form.Label>
              <Form.Control type="text" placeholder="Purchase Cost (Recurring)" disabled={viewOnly} />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Recurring Currency</Form.Label>
              <Form.Select aria-label="Default select example" disabled={viewOnly}>
                <option>Recurring Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Selling Price</Form.Label>
              <Form.Control type="text" placeholder="Selling Price (One Time)" disabled={viewOnly} />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Selling Currency</Form.Label>
              <Form.Select aria-label="Default select example" disabled={viewOnly}>
                <option>Selling Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Selling Price</Form.Label>
              <Form.Control type="text" placeholder="Selling Price (Recurring)" disabled={viewOnly} />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Recurring Selling Currency</Form.Label>
              <Form.Select aria-label="Default select example" disabled={viewOnly}>
                <option>Selling Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Expiry Date</Form.Label>
              <Flatpickr
                className="form-control"
                placeholder="Expiry Date"
                options={{ dateFormat: "Y-m-d" }}
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Default Upgrade Forecasted One Time Price</Form.Label>
              <Form.Control type="text" placeholder="One Time Price" disabled={viewOnly} />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Forecasted Recurring Price</Form.Label>
              <Form.Control type="text" placeholder="Forecasted Recurring Price" disabled={viewOnly} />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Forecasted Tenure Months</Form.Label>
              <Form.Control type="text" placeholder="Forecasted Tenure Months" disabled={viewOnly} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xl="12" className='CrmFormFooter'>
            <Button type="submit" disabled={viewOnly}>Submit</Button>
            <Button type="reset" className='btn btn-default' disabled={viewOnly}>Reset</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default CommonForm;



