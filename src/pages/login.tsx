import React, { Fragment } from 'react';
import Footer from '../components/Layout/Footer/Footer';
import Login from '../components/Layout/Forms/Login';
import Header from '../components/Layout/Header/Header';

const login = () => {
  return (
    <Fragment>
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
};

export default login;
