import React from 'react';
import { Link } from 'react-router-dom';

import { appUrls } from '../../urls';
import Header from '../../components/header/Header';
import Teams from '../../components/lists/Teams';
import Reset from '../../components/reset/reset';


const TeamsView = () => (
    <>
        <div className="main-nav-bar">
            <Link className="nav-links" to={appUrls.HOME}>Link to Home</Link>
            <Link className="nav-links" to={appUrls.SETTINGS}>Game Settings</Link>
            <Reset />
        </div>
        <div className="page-container">
            <Header />
            <Reset />
        </div>
        <div className="list-teams">
            <Teams />
        </div>
    </>
);

export default TeamsView;