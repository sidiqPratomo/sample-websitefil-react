import Card from "react-bootstrap/Card";
import Antman from "../assets/images/superhero/antman.jpg";
import Avenger from "../assets/images/superhero/avenger.jpg";
import Batman from "../assets/images/superhero/batman.jpg";
import Robinhood from "../assets/images/superhero/robinhood.jpg";
import Spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import Superman from "../assets/images/superhero/superman.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <Container>
        <h1 className="text-white pt-4 pb-3">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className=" text-white movieImage">
              <Image src={Antman} alt="Antman Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Antman</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Avenger} alt="Avenger Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Avenger</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Batman} alt="Batman Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Batman</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Robinhood} alt="Robinhood Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Robinhood</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Spiderman} alt="Spiderman Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Spiderman</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Superman} alt="Superman Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Superman</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
