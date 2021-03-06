import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/form/Form';
import { appUrls } from '../../urls';
import Header from '../../components/header/Header';
import ListName from '../../components/lists/NameLists';
import Reset from '../../components/reset/reset';


const HomeView = () => (
    <>
        <div className="main-nav-bar">
            <Link className="nav-links" to={appUrls.SETTINGS}>Game Settings</Link>
            <Reset />
        </div>
        <div className="page-container">
            <Header />
            <Form />
        </div>
        <div className="list-name">
            <ListName />
        </div>
    </>
);

export default HomeView;