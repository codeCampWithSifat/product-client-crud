import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create/Create";
import Delete from "./components/Delete/Delete";
import Header from "./components/Header/Header";
import Read from "./components/Read/Read";
import Update from "./components/Update/Update";
import UpdateInfo from "./components/UpdateInfo/UpdateInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Read />}/>
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/updateinfo/:id" element={<UpdateInfo />} />
      </Routes>
    </div>
  );
}

export default App;
