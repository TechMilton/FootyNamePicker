import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import Form from '../../components/form/Form';
import { appUrls } from '../../urls';

import ListName from '../../components/lists/NameLists';
import Teams from '../../components/lists/Teams';
import Reset from '../../components/reset/reset';


const HomeView = () => (
    <>
        <div className="main-nav-bar">
            <Link to={appUrls.SETTINGS}>Game Settings</Link>
            <Reset />
        </div>
        <div className="page-container">
            <Header />
            <Form />
        </div>
        <div className="list-name">
            <ListName />
        </div>
        <div className="list-teams">
            <Teams />
        </div>
    </>
);

export default HomeView;