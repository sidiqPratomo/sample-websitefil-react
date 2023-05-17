import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const TesApi = () => {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`https://imdb-top-100-movies.p.rapidapi.com/`, {
        headers: {
          "X-RapidAPI-Key": "YOUR TOKEN",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
      })
      .then((response) => {
        setMovies(response.data);
        console.log(response);
      });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-white pt-4 pb-3">TOP MOVIES</h1>
        <Row>
          {movies.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" id="trending" key={index}>
                <Card className=" text-white movieImage">
                  <Image src={result.image} alt="tes" className="images" />
                  <div className="bg-dark">
                    <div className="text-white p-2 m-1">
                      <Card.Title className="text-center">{result.title}</Card.Title>
                      <Card.Text className="text-left">{result.description} </Card.Text>
                      <Card.Text className="text-left">Release : {result.year}</Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TesApi;
