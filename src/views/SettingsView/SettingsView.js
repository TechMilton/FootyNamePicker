import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import Settings from '../../components/settings/Settings'
import { appUrls } from '../../urls';

import Reset from '../../components/reset/reset';

const SettingsView = () => (
    <>
        <div className="main-nav-bar">
            <Link to={appUrls.HOME}>Link to Home</Link>
            <Reset />
        </div>
        <div className="page-container">
            <Header />
            <Settings />
        </div>
    </>
);

export default SettingsView;
