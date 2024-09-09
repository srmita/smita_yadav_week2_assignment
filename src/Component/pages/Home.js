import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
    
    useEffect(() => {
      axios.get("http://localhost:3002/users")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
      const confirm = window.confirm("Would you like to Delete");
      if(confirm){
        axios.delete("http://localhost:3002/users/" +id)
        .then(res => {
          window.alert("Record Delete");
          navigate('/');
      }).catch(err => console.log(err));

        }
      }

    return(
        <div>
            <h2>All Records</h2>
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
        {data.map((data, i) => (
            <tr key={i}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.location}</td>
            <td>{data.date}</td>
            <td>{data.description}</td>

            <td>
            <Link to={`/view/${data.id}`} className="btn btn-sm btn-info me-2">View</Link>{' '}
            <Link to={`/update/${data.id}`} className="btn btn-sm btn-success me-2">Update</Link>{' '}
            <button onClick={e => handleDelete(data.id)} className="btn btn-sm btn-danger me-2">Delete</button>
            </td>
           </tr>
        ))
        
        
        }
        
      </tbody>
    </Table>
        </div>
    )
   
      
}
export default Home;