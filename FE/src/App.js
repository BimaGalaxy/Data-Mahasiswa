import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import DataMahasiswa from "./page/dataMahasiswa";
import TambahMahasiswa from "./page/tambahMahasiswa";
import EditMahasiswa from "./page/editMahasiswa";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<DataMahasiswa/>}></Route>
              <Route path="/add" element={<TambahMahasiswa/>}></Route>
              <Route path="/edit/:id" element={<EditMahasiswa/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
