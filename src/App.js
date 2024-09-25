import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { persons } from "./data";
import DatesCount from "./Component/DatesCount";
import DatesList from "./Component/DatesList";
import DatesAction from "./Component/DatesAction";
const App = () => {
  const [personData, setPersonData] = useState(persons);
  useEffect(() => {
    setPersonData([]);
  },[]);
  const onDelete = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(persons);
  };

  return (
    <div className="font color-body">
      <Container className="p-4">
      
        <DatesCount persons={personData} />

        <DatesList persons={personData} />

        <DatesAction deleteData={onDelete} onViewData={onViewData} />
      
      </Container>
    </div>
  );
};

export default App;
