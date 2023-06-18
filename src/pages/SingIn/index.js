import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Sing } from './style';
import Center from '../../components/Center';

function SingIn() {
  return (
    <Center class1="classCenter">
      <Sing>
        <h2>Login</h2>

        <Form>
          <div className="group-input">
            <input type="text" />
          </div>

          <button type="submit">Entrar</button>
          <Link to="/register">Entre</Link>
        </Form>
      </Sing>
    </Center>
  );
}

export default SingIn;
