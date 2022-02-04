import React from 'react';
import _ from 'lodash';
import Pacient from './Pacient';

const PacientList = ({ pacients, setPacients }) => {

  const handleRemovePacient = (id) => {
    setPacients(pacients.filter((pacient) => pacient.id !== id));
  };

  return (
    <React.Fragment>
      <div className="Pacient-list">
        {!_.isEmpty(pacients) ? (
          pacients.map((pacient) => (
            <Pacient key={pacient.id} {...pacient} handleRemovePacient={handleRemovePacient} />
          ))
        ) : (
          <p className="message">No pacients available. Please add some pacients.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default PacientList;