import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

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
      <Greet  title={data[0].title}
              price={data[0].price}
              date={data[0].date} />
      <Greet  title={data[1].title}
              price={data[1].price}
              date={data[1].date} />
      <Greet  title={data[2].title}
              price={data[2].price}
              date={data[2].date} />
    </div>
  );
}

export default App;
