import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteWrapper from './routerWrapper';
import Dasboard from '../pages/Dasboard';
import Home from '../pages/Home';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

export default function BrowserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RouteWrapper loggedComponent={<Dasboard />} defaultComponent={<Home />} />} />
      <Route path="/login" element={<RouteWrapper loggedComponent={<Dasboard />} defaultComponent={<SingIn />} />} />
      <Route path="/register" element={<RouteWrapper loggedComponent={<Dasboard />} defaultComponent={<SingUp />} />} />
      <Route path="/dashboard" element={<RouteWrapper loggedComponent={<Dasboard />} defaultComponent={<SingIn />} IsPrivate />} />
    </Routes>
  );
}
