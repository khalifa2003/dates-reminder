import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({persons}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle">
          {persons.length ? (
            persons.map((person) => (
              <div key={person.id} className="d-flex border-bottom mx-3">
                <img src={person.img} className="img-avatar p-2" alt="Photo" />
                <div className="px-2 pt-2">
                  <p className="d-inline fs-4">{person.name}</p>
                  <p className="fs-6">{person.date}</p>
                </div>
              </div>
            ))
          ) : (
            <h2 className="p-5">لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
