import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesCount = ({persons}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        لديك {persons.length} مواعيد
      </Col>
    </Row>
  );
};

export default DatesCount;
