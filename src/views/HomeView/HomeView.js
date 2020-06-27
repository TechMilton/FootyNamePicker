import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import Form from '../../components/form/Form';
import { appUrls } from '../../urls';

const HomeView = () => (
    <>
        <Link to={appUrls.SETTINGS}>Game Settings</Link>
        <div className="page-container">
            <Header />
            <Form />
        </div>
        <div className="list-name">
        </div>
        <div className="list-teams">
        </div>
    </>
);

export default HomeView;