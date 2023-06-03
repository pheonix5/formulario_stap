import React, { useState, useEffect, useMemo } from "react";
import './admin.css'

import { Table, Button } from 'react-bootstrap'
import { format } from "date-fns"; 

import { db } from '../../services/firebaseConnection'
import { collection, orderBy, onSnapshot, query } from 'firebase/firestore'

import { Header } from '../../components/Header'

export default function Admin(){
  const [checkList, setChekList] = useState([]);
  const [placa, setPlaca] = useState('');
  const [data, setData] = useState('');
  const [busca, setBusca] = useState('');



  useEffect(() => {
    const checkListRef = collection(db, 'formularios');
    const queryRef = query(checkListRef, orderBy('date', 'desc'));

    const unsub = onSnapshot(queryRef, (snapshopt) => {
      let lista = [];

      snapshopt.forEach((doc) => {
        lista.push({
          id: doc.id,
          motorista: doc.data().motorista,
          placa: doc.data().placa,
          date: format(doc.data().date, 'dd-MM-yyyy'),
          crlv: doc.data().crvl,
          antt: doc.data().antt,
          dedetizacao: doc.data().dedetizacao,
          cvv: doc.data().cvv,
          tacografo: doc.data().tacografo,
          limpo: doc.data().limpo,
          triangulo: doc.data().triangulo,
          estepe: doc.data().estepe,
          chaveRodas: doc.data().chaveRodas,
          macaco: doc.data().macaco,
          pneuCalibrado: doc.data().pneuCalibrado,
          pneuBomEstado: doc.data().pneuBomEstado,
          nivelAgua: doc.data().nivelAgua,
          nivelOleo: doc.data().nivelOleo,
          nivelArla: doc.data().nivelArla,
          farois: doc.data().farois,
          lanternaTrazeira: doc.data().lanternaTrazeira,
          luzRe: doc.data().luzRe,
          luzFreio: doc.data().luzFreio,
          setas: doc.data().setas,
          retrovisores: doc.data().retrovisores,
          pneus: doc.data().pneus,
          avariasLateralBau: doc.data().avariasLateralBau,
          ruidosBarulhos: doc.data().ruidosBarulhos,
          manifesto: doc.data().manifesto,
          observacao: doc.data().observacao,
        })
      })
      setChekList(lista);
    })
    
    return () => unsub;
  }, [])

  const motoristaFiltrado = useMemo(() => {
  const lowerBusca = busca.toLowerCase();
  return checkList.filter((list) =>
    list.motorista.toLowerCase().includes(lowerBusca) &&
    list.placa.toLowerCase().includes(placa.toLowerCase()) &&
    list.date.includes(data)
  );
}, [busca, placa, data]);


  return(
    <div className="admin-container">
      <Header />
      
      <div className="search-input">
      <input type="text" placeholder="Motorista" value={busca} onChange={(e) => setBusca(e.target.value)}/>
      <input type="text" placeholder="Placa" value={placa} onChange={(e) => setPlaca(e.target.value)}/>
      <input type="date" value={data} onChange={(e) => setData(e.target.value)}/>

      </div>

      <div className="listagem">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Motorista</th>
              <th>Placa</th>
              <th>Data</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {motoristaFiltrado.map((item, index) => (
              <tr key={index}>
                <td>{item.motorista}</td>
                <td>{item.placa}</td>
                <td>{item.date}</td>
                <td><Button>Detalhes</Button></td>
              </tr>
            ))}
          </tbody>

        </Table>
      </div>
    </div>
  )
}