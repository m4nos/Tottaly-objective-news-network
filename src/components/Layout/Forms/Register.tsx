import React, { useEffect } from 'react';
import { Button, TextField } from '@mui/material';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from '../../../features/auth/authSlice';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import Link from 'next/link';

const Register = () => {
  const dispatch = useDispatch();
  //TODO INPUT VALIDATION

  //TODO YUP ERROR HANDLING

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
      surname: Yup.string()
        .max(25, 'Must be 25 characters or less')
        .required('Required'),
      email: Yup.string().email('Please enter a valid email'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootStateOrAny) => state.auth
  );

  // useEffect(() => {
  //   if (isError) console.log(message);
  // }, [user, isError, isSuccess, message, , dispatch]);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <div>
      <section className="form">
        <h1>Register</h1>
        <p>Create an account on NewsPortal</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              helperText={formik.errors.name}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Surname"
              type="text"
              className="form-control"
              id="surname"
              name="surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              helperText={formik.errors.surname}
            />
          </div>
          <div className="form-group">
            <TextField
              label="email"
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              helperText={formik.errors.email}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Password"
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={formik.errors.password}
            />
          </div>
          <div className="form-group">
            <Button
              variant="contained"
              type="submit"
              className="btn btn-primary"
            >
              Register
            </Button>

            <br />
            <Link href="/login">
              <button type="button" className="btn btn-secondary">
                I already have an account
              </button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
