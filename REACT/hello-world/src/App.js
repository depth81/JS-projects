import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import React, {Component} from 'react'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

// function App() {
//   return (
//     <div className="App">      
//       <Message />
//     </div>
//   );
// }

class App extends Component {
  render(){
    return(
      <div className="App">
        <NameList />
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>  
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>CLICK!</button>
        </Greet>
        <Greet name="Diana" heroName="WonderWoman"/>
        <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Welcome name="Clark" heroName="Superman"></Welcome>
        <Welcome name="Diana" heroName="WonderWoman"></Welcome> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
        {/* <Greet name="Diana" heroName="WonderWoman"/>
        <Welcome name="Bruce" heroName="Batman"></Welcome> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <EventBind /> */}
      </div>
    )
  }
}

export default App;
