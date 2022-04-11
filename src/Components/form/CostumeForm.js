import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

export const CostumeForm = ({ getData }) => {
  const [search, setSearch] = useState({});

  const handelOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();

    if (search) {
      getData(search);
      
    }
    setSearch(" ");
  };

  return (
    <div>
      <Form
        className="form text-center d-flex justify-content-center"
        onSubmit={handelOnSubmit}
      >
        <Row>
          <Col>
            <Form.Control
              placeholder="Search Your Movie"
              style={{ width: "40rem" }}
              onChange={handelOnChange}
            />
          </Col>
          <Col>
            <Button className="button" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
