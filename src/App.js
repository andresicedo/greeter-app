import './App.css';
import Greeter from './components/Greeter'
import Timestamp from './components/Timestamp'


const turtles = [
  'Donatello',
  'Leonardo',
  'Raphael',
  'Michaelangelo',
  'Splinter'
]

function App() {
  return (
    <div className="App">
      <Timestamp />
     <h1 className="greeting">Greet The Turtles</h1>
      {
        turtles.map((turtle, index) => {
          return <Greeter name={turtle.toUpperCase()} key={index} />
        })
      }

    </div>
  );
}

export default App;
