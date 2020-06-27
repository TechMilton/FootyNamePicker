import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import Settings from '../../components/settings/Settings'
import { appUrls } from '../../urls';

const SettingsView = () => (
    <>
        <Link to={appUrls.HOME}>Link to Home</Link>
        <div className="page-container">
            <Header />
            <Settings />
        </div>
    </>
);

export default SettingsView;
