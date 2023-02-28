import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Component/Navbar";
import Login from "./Component/Login";
import Counter from "./Component/Counter";
import Register from "./Component/Register";
import Home from "./Component/Home";
import BookingPanel from "./Component/BookingPanel";
import DropDown from "./commons/DropDown";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bookingPanel" element={<BookingPanel />} />
        <Route path="/drop" element={<DropDown />} />
      </Routes>
    </>
  );
}

export default App;
