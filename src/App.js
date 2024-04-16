
import './App.css';
import { Form } from './components/Form';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import { Inline } from './components/inline';
// import { NameList } from './components/NameList';
// import { Stylesheet } from './components/Stylesheet';
// import { ClickHandler } from './components/ClickHandler';
// import {Greet} from './components/Greet'
// import { Message } from './components/Message'
// import { ParentComponent } from './components/ParentComponent';
// import { UserGreeting } from './components/UserGreeting';

function App() {
  return (
    <div className="App">
    
      {/* <Greet name = 'Zubair'/>
      <Greet name = 'Adnan'>
        <p>This is another props</p>
       </Greet> */}
      
      {/* <Message /> */}
      {/* <ClickHandler/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet/> */}
      {/* <Inline /> */}
      {/* <h1 className ='error'>Error </h1> */}
      {/* <h1 className = {styles.success}>Success</h1> */}
      <Form/>
      
      
    </div>
  );
}

export default App;
