import React from 'react';
import Link from 'next/link';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.nav__logo}></div>
      <div className={classes.nav__links}>
        <Link href="/">Frontpage</Link>
        <Link href="/economy">Economy</Link>
        <Link href="/sports">Sports</Link>
        <Link href="/lifestyle">Lifestyle</Link>
      </div>
    </div>
  );
};

export default Navigation;
