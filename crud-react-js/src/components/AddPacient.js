import React from 'react';
import PacientForm from './PacientForm';
const AddPacient = () => {
  const handleOnSubmit = (pacient) => {
    console.log(pacient);
  };

  return (
    <React.Fragment>
      <PacientForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddPacient;