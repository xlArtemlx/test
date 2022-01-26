import logo from './logo.svg';
import './App.css';
import {Apps}from './components/app'
import {Async}from './components/async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Apps/>
      <Async/>
      <ToastContainer />
    </div>
  );
}

export default App;
