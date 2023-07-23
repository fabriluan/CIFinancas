import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/user/slice';

export default function RouteWrapper({ loggedComponent, defaultComponent, IsPrivate }) {
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const LoadStorage = () => {
      const storage = localStorage.getItem('@CIF');

      if (storage) {
        registerUser(JSON.parse(storage));
        setSigned(true);
        setLoading(false);
      } else {
        setSigned(false);
      }

      setLoading(false);
    };

    LoadStorage();
  }, [user]);

  useEffect(() => {
    if (loading) {
      return; // Aguarda até que o carregamento esteja concluído
    }

    if (!signed && IsPrivate) {
      navigate('/login');
    }

    if (signed && !IsPrivate) {
      navigate('/dashboard');
    }
  }, [loading, signed, IsPrivate, navigate]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return signed ? loggedComponent : defaultComponent;
}
