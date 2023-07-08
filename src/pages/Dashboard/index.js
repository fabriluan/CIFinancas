import React, { useState } from 'react';
import { BiDownArrowCircle, BiUpArrowCircle, BiSolidEditAlt } from 'react-icons/bi';
import { FaMoneyBills } from 'react-icons/fa6';
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoCloseSharp } from 'react-icons/io5';
import Header from '../../components/Header';
import Center from '../../components/Center';
import img from '../../assets/transferencia.png';
import * as styles from './style';

function Dasboard() {
  const [operation, setOperation] = useState(false);
  const [history, setHistory] = useState(false);

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

              <styles.ButtonAddOperation onClick={() => setOperation(!operation)}>+ Adicionar nova operação</styles.ButtonAddOperation>

              <styles.ButtonHistoriOperation onClick={() => setHistory(!history)}>
                <TfiMenuAlt />
                {' '}
                <span>Historico de operações</span>
              </styles.ButtonHistoriOperation>

            </styles.ContentAddInfosButtons>

            <styles.OperationAndHistory>
              {operation && (
                <styles.AddOperation>
                  <styles.AddOperationButtonClose>
                    <IoCloseSharp />
                  </styles.AddOperationButtonClose>

                  <styles.AddOperationForm>
                    <styles.GroupInput>
                      <select>
                        <option>Entrada</option>
                      </select>
                    </styles.GroupInput>

                    <styles.GroupInput>
                      <input type="text" />

                      <div>
                        <input type="checkbox" />
                        <span>Agendar data</span>
                      </div>

                      <input type="date" />

                    </styles.GroupInput>

                    <styles.GroupInput>
                      <textarea placeholder="Digite uma descrição" />

                      <button type="submit">Registrar</button>

                    </styles.GroupInput>

                  </styles.AddOperationForm>
                </styles.AddOperation>
              )}

              {history && (
                <styles.History>
                  <h2>Historico de operações</h2>

                  <styles.HistoryAction>
                    <h3>Entrada</h3>

                    <p>R$ + 800,00</p>

                    <button type="button">
                      <BiSolidEditAlt />
                    </button>
                  </styles.HistoryAction>
                </styles.History>
              )}
            </styles.OperationAndHistory>

            {!operation && !history ? (
              <styles.AboutInfos>
                <h2>Gerencie agora seu dinheiro</h2>

                <img src={img} alt="foto de perfil" />
              </styles.AboutInfos>
            ) : (<u />)}

          </styles.ContentAddInfos>
        </styles.DashboardSt>
      </Center>
    </>
  );
}

export default Dasboard;
