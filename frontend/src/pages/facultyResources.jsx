import React, { useState } from "react";
import { Container, Button, Table, Form } from "react-bootstrap";

export default function FacultyResources() {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState("");

  const handleUpload = () => {
    if (newResource.trim()) {
      setResources([...resources, newResource]);
      setNewResource("");
    }
  };

  const handleDelete = (index) => {
    setResources(resources.filter((_, i) => i !== index));
  };

  return (
    <Container className="mt-5">
      <h2>Faculty Study Resources</h2>
      <p>Upload and manage study materials.</p>

      <Form.Group className="mb-3">
        <Form.Label>Upload PDF Link</Form.Label>
        <Form.Control type="text" value={newResource} onChange={(e) => setNewResource(e.target.value)} />
        <Button className="mt-2" onClick={handleUpload}>Upload</Button>
      </Form.Group>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Resource</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><a href={resource} target="_blank" rel="noopener noreferrer">View PDF</a></td>
              <td><Button variant="danger" onClick={() => handleDelete(index)}>Remove</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
