import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Facebook
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Mini Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {};

export default Header;
