import './App.css';
import Greets from './Components/Greets/Greets';

function App() {
  const data = [
    {
      id: '1651666666666',
      title: 'My Company',
      price: 146,
      date: new Date(2021, 9, 14)
    },
    {
      id: '165166666',
      title: 'Second Company',
      price: 176.54,
      date: new Date(2021, 9, 10)
    },
    {
      id: '166666666',
      title: 'New Company',
      price: 125.5,
      date: new Date()
    }
  ]


  return (
    <div className="App">
      <h1>Salam Aleykum Fuad</h1>
      <Greets myData = {data}/>
    </div>
  );
}

export default App;
