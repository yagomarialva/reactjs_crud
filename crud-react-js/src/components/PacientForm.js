import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const PacientForm = (props) => {
  const [pacient, setpacient] = useState({
    pacient_name: props.pacient ? props.pacient.pacient_name : '',
    birthday: props.pacient ? props.pacient.birthday : '',
    cpf: props.pacient ? props.pacient.cpf : '',
    gender: props.pacient ? props.pacient.gender : '',
    address: props.pacient ? props.pacient.address : '',
    status: props.pacient ? props.pacient.status : '',
    creation_date: props.pacient ? props.pacient.creation_date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { pacient_name, birthday, cpf, status, address, gender } = pacient;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [pacient_name, status, address, gender];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const pacient = {
        id: uuidv4(),
        pacient_name,
        birthday,
        cpf,
        status,
        gender,
        creation_date: new Date()
      };
      props.handleOnSubmit(pacient);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setpacient((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>pacient Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="pacient_name"
            value={pacient_name}
            placeholder="Enter name of pacient"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="birthday">
          <Form.Label>pacient birthday</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="birthday"
            value={birthday}
            placeholder="Enter birthday of pacient"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="cpf">
          <Form.Label>pacient cpf</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="cpf"
            value={cpf}
            placeholder="Enter cpf of pacient"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>pacient status</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="status"
            value={status}
            placeholder="Enter status"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>gender</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="gender"
            value={gender}
            placeholder="Enter gender"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>pacient address</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="address"
            value={address}
            placeholder="Enter address of pacient"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PacientForm;