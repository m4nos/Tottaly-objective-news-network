import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';
import Link from 'next/link';
import { RootState } from '../../../app/rootReducer';

const TopBar = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const onChangeLanguageHandler = () => {};

  const onLogoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="header__links flex flex-jc-fe hide-for-mobile">
      {/* <label htmlFor="lang">Language</label>
      <select name="lang" onChange={onChangeLanguageHandler}>
        Language
        <option value="GR">Greek</option>
        <option value="EN">English</option>
      </select> */}
      {/* TODO ADMIN LINK */}
      {/* <Link to="./Linkdmin">Admin</Link> */}
      {user ? (
        <button onClick={onLogoutHandler}>Logout</button>
      ) : (
        <>
          <Link href="/api/auth/signin">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default TopBar;
