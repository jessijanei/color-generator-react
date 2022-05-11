import './App.css';

function App() {
  const generateColor = () => {
    fetch('www.colr.org/json/colors/random/7')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }



  return (
    <div className="App">
      <div>
        <button onClick={generateColor}>Color</button>
       
      </div>
    </div>
  );
}

export default App;
