import React from 'react';
import { useSelector } from 'react-redux';
import { BiSolidEditAlt } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import Header from '../../components/Header';
import * as style from './style';
import Center from '../../components/Center';

function Reports() {
  const { operation } = useSelector((rootReducer) => rootReducer.operationReducer);

  console.log(operation);

  return (
    <>
      <Header />

      <style.ReportsSt>
        <Center>
          <h2>Relatórios</h2>

          <style.ReportsButton>
            <button type="button">Entradas</button>
            <button type="button">Saídas</button>
            <button type="button">Total</button>
          </style.ReportsButton>

          <style.ReportsList>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Descrição</th>
                <th>#</th>
              </tr>
            </thead>

            <tbody>
              {operation[0].map((element) => (
                <tr>
                  <td>{element.type === '1' ? 'Entrada' : 'Saída'}</td>
                  <td>{element.valor}</td>
                  <td>{element.date}</td>
                  <td>{element.description ? element.description : '-'}</td>
                  <td>
                    <style.ButtonEdit><BiSolidEditAlt /></style.ButtonEdit>
                    <style.ButtonEdit><IoClose /></style.ButtonEdit>
                  </td>
                </tr>
              ))}
            </tbody>

            <style.GenerateReports>
              <button type="button">
                Gerar Relatorio
              </button>
            </style.GenerateReports>
          </style.ReportsList>
        </Center>
      </style.ReportsSt>

    </>
  );
}

export default Reports;
