import './App.css'
import Counter from './counter';
import Friends from './friends';
import Team from './team';
import User from './user';


function App() {
  function handleClick (){
    alert('button click');
  }
  const handleClick2 = () =>{
    alert('button click 2');
  }
  const addFour = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() =>{
        alert('click third')
      }}>Third</button>
      <button onClick={() => addFour(3)}>Four</button>
    </>
  )
}

export default App
