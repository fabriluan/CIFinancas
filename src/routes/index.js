import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RouteWrapper from './routerWrapper';
import Dasboard from '../pages/Dasboard';
import Home from '../pages/Home';
import SingUp from '../pages/SingUp';
import SingIn from '../pages/SingIn';

export default function BrowserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RouteWrapper loggedComponent={<Dasboard />} defaultComponent={<Home />} />} />
      <Route path="/login" element={<RouteWrapper loggedComponent={<Dasboard />} defaultComponent={<SingIn />} />} />
      <Route path="/register" element={<RouteWrapper loggedComponent={<Dasboard />} defaultComponent={<SingUp />} />} />
    </Routes>
  );
}
