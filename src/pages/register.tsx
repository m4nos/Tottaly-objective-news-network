import React, { Fragment } from 'react';
import Footer from '../components/Layout/Footer/Footer';
import Register from '../components/Layout/Forms/Register';
import Header from '../components/Layout/Header/Header';

const register = () => {
  return (
    <Fragment>
      <Header />
      <Register />
      <Footer />
    </Fragment>
  );
};

export default register;
