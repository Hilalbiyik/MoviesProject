import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Movies.css";

const MovieCard = ({ title, programType, releaseYear, images, width }) => {
  //console.log(title)
  return (
    <div className="card-container">
      <Card style={{ width: "12rem" }}>
        <Card.Img 
        className="img" 
        variant="top" 
        src={images} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>

            {programType}
          </Card.Text>
          <Button variant="primary">{releaseYear}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
