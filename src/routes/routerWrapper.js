import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RouteWrapper({ loggedComponent, defaultComponent, IsPrivate }) {
  const signed = false;
  const loading = false;

  function LoadComponent() {
    if (loading) {
      return (
        <div>Carregando...</div>
      );
    }

    if (!signed && IsPrivate) {
      return <Navigate to="/" />;
    }

    if (signed && !IsPrivate) {
      return <Navigate to="/" />;
    }
  }

  LoadComponent();

  return signed ? loggedComponent : defaultComponent;
}
