import React from "react";
import { NavLink } from "react-router-dom";
// import styles from "./SearchCard.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const SearchCard = (props) => {
  return (
    <NavLink to={`${props.requests.type}/${props.requests._id}`}>
      <Col>
        <Card
          bg="light"
          border="dark"
          style={{ width: "18rem" }}
          className="task_card_array"
        >
          <Card.Body>
            <Card.Title>{props.requests.title}</Card.Title>
            <img
              src={`http://localhost:5001/${props.requests.image}`}
              alt={`${props.requests.title}`}
            />
          </Card.Body>
        </Card>
      </Col>
    </NavLink>
  );
};

export default SearchCard;