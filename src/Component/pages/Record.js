import Table from 'react-bootstrap/Table';

function Record() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
            <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
           </tr>
        ))}
        
      </tbody>
    </Table>
  );
}

export default Record;