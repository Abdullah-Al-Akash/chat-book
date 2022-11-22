import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/Login'
import Registration from './Components/Authentication/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/messenger/registration' element={<Registration></Registration>}></Route>
        <Route path='/messenger/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
