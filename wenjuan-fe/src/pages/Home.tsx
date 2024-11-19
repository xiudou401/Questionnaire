import React, { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home: FC = () => {
  const nav = useNavigate();
  const clickHandler = () => {
    // nav('/login');
    // nav('/login?b=20');
    nav({
      pathname: '/login',
      search: 'b=21',
    });
  };
  return (
    <div>
      <p>Home</p>
      <div>
        <button onClick={clickHandler}>登陆</button>
        <Link to="/register">Register</Link>
        {/* <Link to="/register?a=10">Register</Link> */}
      </div>
    </div>
  );
};

export default Home;
