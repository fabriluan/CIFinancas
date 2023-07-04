import React from 'react';
import { BiDownArrowCircle, BiUpArrowCircle } from 'react-icons/bi';
import { FaMoneyBills } from 'react-icons/fa6';
import { TfiMenuAlt } from 'react-icons/tfi';
import Header from '../../components/Header';
import Center from '../../components/Center';
import * as styles from './style';

function Dasboard() {
  return (
    <>
      <Header />
      <Center>
        <styles.DashboardSt>
          <styles.ContentInfosConte>

            <styles.InfosConte>
              <h2>Entrada: </h2>

              <h1>
                R$:
                {' '}
                <l>+ 1.800,00</l>
              </h1>

              <span>+ R$: 800,00</span>

              <BiUpArrowCircle />
            </styles.InfosConte>

            <styles.InfosConte isNegative>
              <h2>Saida: </h2>

              <h1>
                R$:
                {' '}
                <l>- 1.800,00</l>
              </h1>

              <span>- R$: 800,00</span>

              <BiDownArrowCircle />
            </styles.InfosConte>

            <styles.InfosTotal>
              <h2>Saldo: </h2>

              <h1>
                R$:
                {' '}
                <l>1.800,00</l>
              </h1>

              <span>R$: 800,00</span>

              <FaMoneyBills />
            </styles.InfosTotal>

          </styles.ContentInfosConte>

          <styles.ContentAddInfos>

            <styles.ContentAddInfosButtons>

              <styles.ButtonAddOperation>+ Adicionar nova operação</styles.ButtonAddOperation>

            </styles.ContentAddInfosButtons>

            <styles.ButtonHistoriOperation>
              <TfiMenuAlt />
              {' '}
              <span>Historico de operações</span>
            </styles.ButtonHistoriOperation>

          </styles.ContentAddInfos>
        </styles.DashboardSt>
      </Center>
    </>
  );
}

export default Dasboard;
