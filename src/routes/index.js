import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteWrapper from './routerWrapper';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Transaction from '../pages/Transaction';
import Profile from '../pages/Profile';

export default function BrowserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<Home />} />} />
      <Route path="/login" element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<SingIn />} />} />
      <Route path="/register" element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<SingUp />} />} />
      <Route path="/dashboard" element={<RouteWrapper loggedComponent={<Dashboard />} defaultComponent={<SingIn />} IsPrivate />} />
      <Route path="/transaction" element={<RouteWrapper loggedComponent={<Transaction />} defaultComponent={<SingIn />} IsPrivate />} />
      <Route path="/profile" element={<RouteWrapper loggedComponent={<Profile />} defaultComponent={<SingIn />} IsPrivate />} />
    </Routes>
  );
}
