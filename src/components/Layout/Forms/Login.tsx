import { Button, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { login } from '../../../features/auth/authSlice';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootStateOrAny) => state.auth
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      // email: Yup.string().email('Please enter a valid email'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (isError) console.log(message);
    if (user) router.push('/');
    if (isSuccess && user) {
      router.push('/');
    }
  }, [user, isError, isSuccess, message, dispatch]);

  // if(isLoading) {
  //   return <Spinner />
  // }
  return (
    <div>
      <section className="form">
        <h1>Login</h1>
        <p>Log in using your account details</p>

        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <TextField
              label="Email"
              type="text"
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
              Login
            </Button>
            <Link href="/register">
              <Button
                variant="contained"
                type="button"
                className="btn btn-secondary"
              >
                Create account
              </Button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
