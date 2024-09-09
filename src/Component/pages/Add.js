import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Add = () => {
    const [values, setValues] = useState({
        title: '',
        location: '',
        date: '',
        description: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3002/users", values)
        .then(res => {
            console.log(res);
            navigate('/')
        }
        )
        .catch(err => console.log(err));
    }

    return(
      
        <Form onSubmit={handleSubmit}>
          <h1>Add Record</h1>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Title
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Title" onChange={e => setValues({...values, title: e.target.value})} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Location
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Location" onChange={e => setValues({...values, location: e.target.value})} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="date" placeholder="Date" onChange={e => setValues({...values, date: e.target.value})} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Description" onChange={e => setValues({...values, description: e.target.value})} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Add</Button>
        </Col>
      </Form.Group>
    </Form>
    )
}
export default Add;