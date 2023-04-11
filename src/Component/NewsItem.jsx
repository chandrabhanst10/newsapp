import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default class NewsItem extends Component {
  render() {
    let { title, description, heading, imageUrl, newsUrl } = this.props;
    return (
      <Container>
        <Container>
          <h2>{heading}</h2>
        </Container>
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            style={{ backgroundSize: "cover", width: "287px", height: "200px" }}
            src={
              !imageUrl
                ? "https://media.gettyimages.com/id/1177714952/photo/the-logo-marks-the-showroom-and-service-center-for-the-us-automotive-and-energy-company-tesla.jpg?s=612x612&w=gi&k=20&c=OGJL-MAiWoIFol6iG2HHP5UlhPlgOTmVhRmAG7rtJZM="
                : imageUrl
            }
          />
          <Card.Body>
            <Card.Title>{title}...</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" href={newsUrl} target="_blank">
              Read More...
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
