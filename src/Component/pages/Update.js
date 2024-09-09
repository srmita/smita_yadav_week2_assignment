import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Update() {
    //const [data, setData] = useState([])
    const {id} = useParams();
    const [values, setValues] = useState({
      title: '',
      location: '',
      date: '',
      description: ''
  })


    useEffect(() => {
      axios.get("http://localhost:3002/users/" + id)
      .then(res => {
        setValues(res.data);
      })
      .catch(err => console.log(err));
    }, []);
    const navigate = useNavigate();
    const handleUpdate = (event) => {
      event.preventDefault();
        axios.put("http://localhost:3002/users/"+id, values)
        .then(res => {
            console.log(res);
            navigate('/')
            window.alert('Records Updated')
        }
        )
        .catch(err => console.log(err));
    }
    return(
        
        <div>
            <h1>Update Record</h1>
            <Form onSubmit={handleUpdate}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2} htmlFor="title">
          Title
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="title" placeholder="Title" value={values.title} onChange={e => setValues({...values, title: e.target.value})}  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2} htmlFor="location">
          Location
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="location" placeholder="Location" value={values.location} onChange={e => setValues({...values, location: e.target.value})} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" htmlFor="date" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="date" name="date" placeholder="Date" value={values.date} onChange={e => setValues({...values, date: e.target.value})}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" htmlFor="description" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Description" name="description" value={values.description} onChange={e => setValues({...values, description: e.target.value})}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Update Data</Button>{' '}
          <Link to="/" className="btn btn-primary">Back</Link>
        </Col>
      </Form.Group>
    </Form>
        </div>
    )
}
export default Update;