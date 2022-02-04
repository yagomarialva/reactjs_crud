import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import PacientsList from '../components/PacientList';
import AddPacient from '../components/AddPacient';
import useLocalStorage from '../hooks/useLocalStorage';
import EditPacient from '../components/EditPacient';

const AppRouter = () => {
    const [pacients, setPacients] = useLocalStorage('pacients', []);
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route
                            render={(props) => (
                                <PacientsList {...props} pacients={pacients} setPacients={setPacients} />
                            )}
                            path="/"
                            exact={true}
                        />
                        <Route
                            render={(props) => (
                                <AddPacient {...props} pacients={pacients} setPacients={setPacients} />
                            )}
                            path="/add"
                        />
                        <Route
                            render={(props) => (
                                <EditPacient {...props} pacients={pacients} setPacients={setPacients} />
                            )}
                            path="/edit/:id"
                        />
                        {/* <Route component={() => <Redirect to="/" />} /> */}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;