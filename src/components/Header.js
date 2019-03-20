import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/expense" activeClassName="is-active" >Create Expense</NavLink>
  </div>
);

export default Header;