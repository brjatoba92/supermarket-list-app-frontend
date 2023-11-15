import { useState, useEffect } from 'react'

import {ListCard } from "./components/ListCard"
import './App.css';

const fakeList = [
  {
    id: 0,
    name: 'RAM1500',
    color: 'blue',
    quantity: 36,
    checked: false,
  },
  {
    id: 1,
    name: 'Ferrari',
    color: 'red',
    quantity: 5,
    checked: false,
  },
  {
    id: 2,
    name: 'Corolla',
    color: 'silver',
    quantity: 520,
    checked: false,
  },
]

function App() {
  const [loading, setLoading] = useState(true) // vai nascer como true
  const [marketList, setMarketList] = useState([]);// const[nomeDoEstado, funcaoParaAlterarODado] = useState(valorInicialDaLista)
  
  const loadList = () => {
    setLoading(true)
    setTimeout(() => {
      setMarketList(fakeList) //sepois de 2 segundo vai setar o marketList
      setLoading(false) // depois de setar o marketList vai mudar o setLoading para falso
    }, 2000); //simulando chamada de API que demora alguns segundos

  }
  
  useEffect(() => { //esquema do window.onload
    loadList() //assim que a tela abrir chama o loadList
  },[])  //useEffect(()=>{declaraFuncao --> tudo o que for gerado a partir da dependencia},[dependenciaDaFuncao])

  return (
    <div className="App">
      {loading ? <span>Carregando ... </span> : marketList.map((item) => (  // if loding true mostre span else mostre a lista 
        <ListCard item={item} key={`item_${item.id}`}/>
      ))} 
    </div>
  );
}

export default App;
