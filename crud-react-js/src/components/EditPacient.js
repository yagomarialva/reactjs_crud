import React from 'react';
import PacientForm from './PacientForm';
import { useParams } from 'react-router-dom';

const EditPacient = ({ history, pacients, setPacients }) => {
  const { id } = useParams();
  const pacientToEdit = pacients.find((pacient) => pacient.id === id);

  const handleOnSubmit = (pacient) => {
    const filteredPacients = pacients.filter((pacient) => pacient.id !== id);
    setPacients([pacient, ...filteredPacients]);
    history.push('/');
  };

  return (
    <div>
      <PacientForm pacient={pacientToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditPacient;