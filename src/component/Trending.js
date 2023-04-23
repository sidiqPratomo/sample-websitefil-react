import Card from "react-bootstrap/Card";
import DuneImage from "../assets/images/trending/dune.jpg";
import Everything from "../assets/images/trending/everything.jpg";
import Infinite from "../assets/images/trending/infinite.jpg";
import Joker from "../assets/images/trending/joker.jpg";
import LightYear from "../assets/images/trending/lightyear.jpg";
import Morbius from "../assets/images/trending/morbius.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <div>
      <Container>
        <h1 className="text-white pt-4 pb-3">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className=" text-white movieImage">
              <Image src={DuneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Dune</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Everything} alt="Everything Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Everything</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Infinite} alt="infinite Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Infinite</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Joker} alt="Joker Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Joker</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={LightYear} alt="LightYear Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">LightYear</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white movieImage">
              <Image src={Morbius} alt="morbius Movies" className="images" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">Morbius</Card.Title>
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

export default Trending;
