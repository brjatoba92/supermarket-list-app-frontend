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
  return (
    <div className="App">
      {fakeList.map((item) => (
        <ListCard item={item} key={`item_${item.id}`}/>
      ))} 
    </div>
  );
}

export default App;
