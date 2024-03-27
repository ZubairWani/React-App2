
import './App.css';
import { ClickHandler } from './components/ClickHandler';
// import {Greet} from './components/Greet'
import { Message } from './components/Message'

function App() {
  return (
    <div className="App">
    
      {/* <Greet name = 'Zubair'/>
      <Greet name = 'Adnan'>
        <p>This is another props</p>
       </Greet> */}
      
      {/* <Message /> */}
      <ClickHandler/>
      
    </div>
  );
}

export default App;
