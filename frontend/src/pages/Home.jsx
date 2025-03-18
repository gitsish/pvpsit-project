import { Container, Carousel, Card, Row, Col, Button } from "react-bootstrap";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Container className="mt-5">
        {/* College Name & Logo */}
        <div className="college-header">
          <img src="/images/placement.png" alt="PVPSIT Logo" className="navbar-logo1" />
          <h1 className="college-name">PRASAD V. POTLURI SIDDHARTHA INSTITUTE OF TECHNOLOGY</h1>
        </div>

        {/* Carousel */}
        <Carousel className="mt-4">
          {[
            { img: "/images/college-1.png", quote: "Shaping Future Engineers with Innovation & Excellence", link: "#" },
            { img: "/images/college-2.png", quote: "A Hub for Research, Knowledge, and Growth", link: "#" },
            { img: "/images/college-3.png", quote: "Bringing Technology & Tradition Together", link: "#" },
          ].map((item, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100 carousel-img" src={item.img} alt={`Slide ${index + 1}`} />
              <Carousel.Caption>
                <h3 className="carousel-quote">{item.quote}</h3>
                <Button variant="light" href={item.link}>Explore More</Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Branch Cards */}
        <h3 className="text-center text-white mt-5">Our Departments</h3>
        <Row className="mt-4">
          {[
            { name: "Computer Science & Engineering", img: "/images/cse.png", quote: "Code Your Future, Change the World", link: "#" },
            { name: "Artificial Intelligence & Machine Learning", img: "/images/cseaiml.png", quote: "Empowering the Future with AI & ML", link: "#" },
            { name: "Data Science", img: "/images/cseDS.png", quote: "Turning Data into Actionable Insights", link: "#" },
            { name: "Information Technology", img: "/images/it.png", quote: "Empowering Digital Innovations", link: "#" },
            { name: "Electronics & Communication", img: "/images/ece.png", quote: "Bridging Communication with AI", link: "#" },
            { name: "Electrical & Electronics", img: "/images/eee.png", quote: "Powering the Future", link: "#" },
            { name: "Mechanical Engineering", img: "/images/mech.png", quote: "Design, Build, and Innovate", link: "#" },
            { name: "Civil Engineering", img: "/images/civil.png", quote: "Constructing a Sustainable Tomorrow", link: "#" },
            { name: "Master of Business Administration", img: "/images/mba.png", quote: "Empowering future leaders with strategy & vision", link: "#" },
          ].map((dept, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="dept-card">
                <Card.Img variant="top" src={dept.img} className="dept-card-img" />
                <Card.Body className="text-center">
                  <h4>{dept.name}</h4>
                  <p className="dept-quote">{dept.quote}</p>
                  <Button variant="success" href={dept.link}>Explore More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
