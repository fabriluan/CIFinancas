import React, { useState } from 'react';
import { BiDownArrowCircle, BiUpArrowCircle, BiSolidEditAlt } from 'react-icons/bi';
import { FaMoneyBills } from 'react-icons/fa6';
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoCloseSharp } from 'react-icons/io5';
import { addDoc, collection } from 'firebase/firestore';
import Header from '../../components/Header';
import Center from '../../components/Center';
import img from '../../assets/transferencia.png';
import * as styles from './style';
import { db } from '../../service/firebaseConnection';

function Dasboard() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = `${ano}-${mes}-${dia}`;

  const [operation, setOperation] = useState(false);
  const [history, setHistory] = useState(false);
  const [type, setType] = useState();
  const [dataCurrent, setDataCurrent] = useState(dataAtual);
  const [valor, setValor] = useState();
  const [checkData, setCheckData] = useState(false);
  const [description, setDescription] = useState('');

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!type) {
      alert('oi');
      return;
    }

    if (!dataCurrent) {
      alert('oi');
      return;
    }

    if (!valor) {
      alert('oi');
      return;
    }

    const storage = localStorage.getItem('@CIF');
    const { uid } = JSON.parse(storage);

    await addDoc(collection(db, 'operations'), {
      type,
      date: dataCurrent,
      valor,
      description,
      clientUid: uid,
    })
      .then(() => {
        console.log('sucesso');
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                  <styles.AddOperationButtonClose onClick={() => setOperation(!operation)}>
                    <IoCloseSharp />
                  </styles.AddOperationButtonClose>

                  <styles.AddOperationForm>
                    <styles.GroupInput>
                      <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option selected disabled>Tipo de operação</option>
                        <option value={1}>Entrada</option>
                        <option value={2}>Saída</option>
                      </select>
                    </styles.GroupInput>

                    <styles.GroupInput>
                      <input type="number" placeholder="Digite o Valor" value={valor} onChange={(e) => setValor(e.target.value)} />

                      <div>
                        <input type="checkbox" checked={checkData} onChange={(e) => setCheckData(e.target.checked)} />
                        <span>Agendar data</span>
                      </div>

                      <input type="date" value={dataCurrent} onChange={(e) => setDataCurrent(e.target.value)} disabled={!checkData} />

                    </styles.GroupInput>

                    <styles.GroupInput>
                      <textarea placeholder="Digite uma descrição" value={description} onChange={(e) => setDescription(e.target.value)} />

                      <button type="submit" onClick={HandleSubmit}>Registrar</button>

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
