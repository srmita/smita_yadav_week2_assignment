import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const View = () => {

    const [data, setData] = useState([])
    const {id} = useParams();

    useEffect(() => {
      axios.get("http://localhost:3002/users/"+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h1>Home Page</h1>
            <Table striped="columns">
      <thead>
        <tr>
            <th>id</th>
          <th>Title</th>
          <th>Location</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      <tr>
            <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.location}</td>
          <td>{data.date}</td>
          <td>{data.description}</td>
        </tr>
        <tr>
        <Link to={`/update/${data.id}`} className="btn btn-sm btn-success me-2">Update</Link>{' '}

        </tr>
        
      </tbody>
    </Table>
        </div>
    )
}
export default View;