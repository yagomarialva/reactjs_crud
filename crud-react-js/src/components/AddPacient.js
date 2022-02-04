import React from 'react';
import PacientForm from './PacientForm';

const AddPacient = ({ history, pacients, setPacients }) => {
  const handleOnSubmit = (pacient) => {
    setPacients([pacient, ...pacients]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <PacientForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddPacient;