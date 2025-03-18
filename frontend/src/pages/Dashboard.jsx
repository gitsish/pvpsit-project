import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <Container className="mt-5">
        <h1 className="text-center text-dark">DASHBOARD</h1>
       <h1> <p className="text-center text-dark">Access your Academic details, Attendance, and Study resources.</p></h1>

        <Row className="mt-4">
          {/* Attendance */}
          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Img variant="top" src="/images/logo.png" className="dashboard-img" />
              <Card.Body className="text-center">
                <h4>Check Attendance</h4>
                <Button variant="primary" onClick={() => navigate("/attendance")}>
                  View Attendance
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Marks */}
          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Img variant="top" src="/images/student-login.png" className="dashboard-img" />
              <Card.Body className="text-center">
                <h4>View Marks</h4>
                <Button variant="success" onClick={() => navigate("/marks")}>
                  Check Marks
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Study Resources */}
          <Col md={4}>
            <Card className="dashboard-card">
              <Card.Img variant="top" src="/images/resources.png" className="dashboard-img" />
              <Card.Body className="text-center">
                <h4>Study Materials</h4>
                <Button variant="warning" onClick={() => navigate("/study-resources")}>
                  Access Resources
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Logout */}
        <div className="text-center mt-4">
          <Button variant="danger" onClick={() => navigate("/")}>Logout</Button>
        </div>
      </Container>
    </div>
  );
}
