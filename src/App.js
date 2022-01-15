import { Input } from './component/Input';
import './App.css';
import { Edit } from './component/edit';
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Input/>} ></Route>
        <Route path="/edit/:id" element={ <Edit/>} ></Route>
     </Routes>
     </Router>
    </div>
  ); 
}

export default App;
