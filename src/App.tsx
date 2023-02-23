import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Component/Navbar";
import Login from "./Component/Login";
import Counter from "./Component/Counter";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Booking from "./Component/Booking";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
