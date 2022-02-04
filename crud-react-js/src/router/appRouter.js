import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import PacientsList from '../components/PacientList';
import AddPacient from '../components/AddPacient';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={PacientsList} path="/" exact={true} />
            <Route component={AddPacient} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;