import './App.css';
import { HomeScreen } from './screens/Home'

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
   <HomeScreen />
  );
}

export default App;
