import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <Container className="mt-5">
        <h1 className="text-center text-white">About PVPSIT</h1>
        <p className="text-center text-light">
          Prasad V. Potluri Siddhartha Institute of Technology is a premier institution committed to excellence in education, research, and innovation.
        </p>

        {/* College Overview Section */}
        <Row className="mt-4">
          <Col md={6}>
            <Card className="about-card">
              <Card.Img variant="top" src="/images/logo.png" className="about-img" />
              <Card.Body>
                <h4 className="text-center">Our Vision</h4>
                <p className="text-center">
                  To nurture global leaders through quality education and innovation-driven research.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="about-card">
              <Card.Img variant="top" src="/images/college-1.png" className="about-img" />
              <Card.Body>
                <h4 className="text-center">Our Mission</h4>
                <p className="text-center">
                  To impart technical knowledge with a blend of innovation and social responsibility.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Achievements & Excellence */}
        <Row className="mt-4">
          <Col md={12}>
            <Card className="about-card text-center">
              <Card.Body>
                <h4>25+ Years of Excellence</h4>
                <p>Ranked among the top institutions for engineering and management education.</p>
                <img src="/images/placement.png" alt="Excellence" className="achievement-img" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
