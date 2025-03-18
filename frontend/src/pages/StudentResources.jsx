import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

export default function StudentResources() {
  const [resources, setResources] = useState([
    "https://example.com/data-structures.pdf",
    "https://example.com/os-notes.pdf"
  ]);

  return (
    <Container className="mt-5">
      <h2>Student Study Resources</h2>
      <p>Access study materials uploaded by faculty.</p>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Resource</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><a href={resource} target="_blank" rel="noopener noreferrer">View PDF</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" href="/">Back to Home</Button>
    </Container>
  );
}
