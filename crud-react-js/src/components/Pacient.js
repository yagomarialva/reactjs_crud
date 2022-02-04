import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Pacient = ({
    id,
    pacient_name,
    birthday,
    cpf,
    status,
    gender,
    creation_date,
    handleRemovePacient
}) => {
    const history = useHistory();
    return (
        <Card style={{ width: '18rem' }} className="pacient">
            <Card.Body>
                <Card.Title className="pacient-title">{pacient_name}</Card.Title>
                <div className="book-details">
                    <div>Pacient Name: {pacient_name}</div>
                    <div>birthday: {birthday} </div>
                    <div>cpf: {cpf} </div>
                    <div>status: {status} </div>
                    <div>gender: {gender} </div>
                    <div>Date: {new Date(creation_date).toDateString()}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
                    Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleRemovePacient(id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Pacient;