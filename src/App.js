import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Alluser from './user/alluser';
import Createuser from './user/createuser';
import Edituser from './user/editeuser';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Alluser />} />
            <Route path="/user/createuser" element={<Createuser />} />
            <Route path="/user/edit/:id" element={<Edituser />} />
          </Routes>
        </BrowserRouter>


      </>
    </div>
  );
}

export default App;
