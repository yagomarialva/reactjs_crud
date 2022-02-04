import React from 'react';
import styles from './header.module.css'



const Header = () => {
    return (
        <header>
            <div className="jumbotron jumbotron-fluid bg-info text-white text-center">
                <div className="container">
                    <h1 className="display-4">ReactJS CRUD - Cadastro de pacientes</h1>
                </div>
            </div>
        </header>
    );
};


export default Header;
