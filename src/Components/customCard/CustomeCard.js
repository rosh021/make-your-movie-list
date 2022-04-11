import React from "react";
import "./card.css";
import { Card, Button } from "react-bootstrap";

export const CustomCard = ({ list }) => {
  return (
    <div className="Card--1 d-flex justify-content-around">
      {list.map((results, i) => {
        console.log(results);
        return (
          <Card key={i} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={results.image}
              style={{ height: "500px" }}
            />
            <Card.Body>
              <Card.Title>{results.title}</Card.Title>
              <Card.Text>{results.description}</Card.Text>
              <Button variant="primary" className="text-center">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
