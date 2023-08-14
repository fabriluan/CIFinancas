import React, { useEffect, useState } from 'react';
import { BiDownArrowCircle, BiUpArrowCircle, BiSolidEditAlt } from 'react-icons/bi';
import { FaMoneyBills } from 'react-icons/fa6';
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoCloseSharp, IoClose } from 'react-icons/io5';
import {
  addDoc, collection, deleteDoc, deleteField, doc, getDocs, orderBy, query, updateDoc,
} from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Center from '../../components/Center';
import img from '../../assets/transferencia.png';
import * as styles from './style';
import { db } from '../../service/firebaseConnection';
import { addOperation } from '../../redux/operation/slice';

function Dasboard() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = `${ano}-${mes}-${dia}`;

  const [operation, setOperation] = useState(false);
  const [history, setHistory] = useState(false);
  const [type, setType] = useState(0);
  const [dataCurrent, setDataCurrent] = useState(dataAtual);
  const [valor, setValor] = useState();
  const [checkData, setCheckData] = useState(false);
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);
  const [loadOperation, setLoadOperation] = useState(false);
  const [add, setAdd] = useState(0);
  const [neg, setNeg] = useState(0);
  const [addU, setAddU] = useState(0);
  const [negU, setNegU] = useState(0);
  const [checkId, setCheckId] = useState('');
  const [listU, setListU] = useState(0);

  const dispatch = useDispatch();

  const LoadDocument = async () => {
    setLoadOperation(true);
    await getDocs(query(collection(db, 'operations'), orderBy('newDate', 'asc')))
      .then((snapshot) => {
        const op = [];

        snapshot.forEach((d) => {
          op.push({
            id: d.id,
            clientUid: d.data().clientUid,
            date: d.data().date,
            description: d.data().description,
            type: d.data().type,
            valor: d.data().valor,
            newDate: d.data().newDate,
          });
        });

        setList(op);

        const addNumero = op.filter((o) => o.type === '1').reduce((acc, obj) => (
          Number(acc) + Number(obj.valor)
        ), 0);

        const negNumero = op.filter((o) => o.type === '2').reduce((acc, obj) => (
          Number(acc) + Number(obj.valor)
        ), 0);

        const ultimoAdd = op.filter((listAdd) => listAdd.type === '1').length > 0 ? op.filter((listAdd) => listAdd.type === '1')[op.filter((listAdd) => listAdd.type === '1').length - 1].valor : 0;

        const ultimoNeg = op.filter((listAdd) => listAdd.type === '2').length > 0 ? op.filter((listAdd) => listAdd.type === '2')[op.filter((listAdd) => listAdd.type === '2').length - 1].valor : 0;

        const ultimo = op.length > 0 ? op[op.length - 1].valor : 0;

        setNeg(negNumero);
        setAdd(addNumero);
        setAddU(ultimoAdd);
        setNegU(ultimoNeg);
        setListU(ultimo);
        dispatch(addOperation(op));

        setLoadOperation(false);
      })
      .catch(() => {
        setLoadOperation(false);
        console.log('error');
      });

    setLoadOperation(false);
  };

  useEffect(() => {
    LoadDocument();
  }, []);

  console.log(list);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const storage = localStorage.getItem('@CIF');
    const { uid } = JSON.parse(storage);

    const UpdateDocument = async () => {
      const minhaConsulta = doc(db, 'operations', checkId);

      if (!description) {
        await updateDoc(minhaConsulta, {
          type,
          valor,
          description: deleteField(),
        })
          .then(() => {
            setType(0);
            setValor('');
            setDataCurrent(dataAtual);
            setDescription('');
            setCheckId('');
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        await updateDoc(minhaConsulta, {
          type,
          valor,
          description,
        })
          .then(() => {
            setType(0);
            setValor('');
            setDataCurrent(dataAtual);
            setDescription('');
            setCheckId('');
          })
          .catch((error) => {
            console.log(error);
          });
      }

      LoadDocument();
    };

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

    if (checkId) {
      UpdateDocument();
      return;
    }

    await addDoc(collection(db, 'operations'), {
      type,
      date: dataCurrent,
      valor,
      description,
      clientUid: uid,
      newDate: `${dataAtual}:${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`,
    })
      .then(() => {
        LoadDocument();
        setValor('');
        setDataCurrent(dataAtual);
        setCheckData(false);
        setDescription('');
        setType(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandleEdit = (element) => {
    console.log(element);
    setOperation(true);
    setType(element.type);
    setValor(element.valor);
    setDataCurrent(element.date);
    setDescription(element.description);
    setCheckId(element.id);
  };

  const HandleDelete = async (id) => {
    await deleteDoc(doc(db, 'operations', id))
      .then(() => {
        console.log('sucesso');
        LoadDocument();
      });
  };

  useEffect(() => {
    if (!operation) {
      setType(0);
      setValor('');
      setDataCurrent(dataAtual);
      setDescription('');
      setCheckId('');
    }
  }, [operation]);

  console.log(list);
  // console.log();
  // console.log(list.length > 0 ? list[list.length - 1] : 0);

  return (
    <>
      <Header />
      <Center>
        <styles.DashboardSt>
          <styles.ContentInfosConte>

            <styles.InfosConte>
              <h2>Entrada: </h2>

              {loadOperation ? (
                <h1>Carregando...</h1>
              ) : (
                <h1>
                  R$:
                  {' '}
                  <p>
                    +
                    {' '}
                    {add}
                  </p>
                </h1>

              )}
              <span>
                R$:
                {' '}
                +
                {' '}
                {addU}
              </span>

              <BiUpArrowCircle />
            </styles.InfosConte>

            <styles.InfosConte $isNegative>
              <h2>Saida: </h2>

              {loadOperation ? (
                <h1>Carregando...</h1>
              ) : (
                <h1>
                  R$:
                  {' '}
                  <p>
                    -
                    {' '}
                    {neg}
                  </p>
                </h1>
              )}

              <span>
                R$:
                {' '}
                -
                {' '}
                {negU}
              </span>

              <BiDownArrowCircle />
            </styles.InfosConte>

            <styles.InfosTotal>
              <h2>Saldo: </h2>

              <h1>
                R$:
                {' '}
                {(add - neg) >= 0 ? '' : '-'}
                {' '}
                {`${Math.abs(add - neg)}`}
              </h1>

              <span>
                R$:
                {' '}
                {list.length > 0 && list[list.length - 1].valor > 0 ? '+' : '-'}
                {' '}
                {listU}
              </span>

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
                        <option value={0} disabled>Tipo de operação</option>
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

                      <button type="submit" onClick={HandleSubmit}>{ checkId ? 'Atualizar' : 'Registrar'}</button>

                    </styles.GroupInput>

                  </styles.AddOperationForm>
                </styles.AddOperation>
              )}

              {history && (
                <styles.History>
                  <h2>Historico de operações</h2>

                  {list.length === 0 && (
                    <h3>Sem histórico</h3>
                  )}

                  <div>
                    {list.slice(-5).map((element) => (
                      <styles.HistoryAction key={element.id} $isColor={element.type}>
                        <h3>{element.type === '1' ? 'Entrada' : 'Saída'}</h3>

                        <p>
                          R$
                          {' '}
                          {element.type === '1' ? '+' : '-'}
                          {' '}
                          {element.valor}
                        </p>

                        <div>
                          <button type="button" onClick={() => HandleEdit(element)}>
                            <BiSolidEditAlt />
                          </button>

                          <button type="button" onClick={() => HandleDelete(element.id)}>
                            <IoClose />
                          </button>
                        </div>
                      </styles.HistoryAction>
                    ))}
                  </div>

                </styles.History>
              )}
            </styles.OperationAndHistory>

            <styles.AboutInfos>
              <h2>Gerencie agora seu dinheiro</h2>

              <img src={img} alt="foto de perfil" />
            </styles.AboutInfos>

          </styles.ContentAddInfos>
        </styles.DashboardSt>
      </Center>
    </>
  );
}

export default Dasboard;
