import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Component/Navbar";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
