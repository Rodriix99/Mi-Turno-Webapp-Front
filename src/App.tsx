import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Component/Navbar";
import Login from "./Component/Login";
import Counter from "./Component/Counter";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Booking from "./Component/Booking";
import CreateBranch from "./Component/CreateBranch";
function App(): JSX.Element {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/createBranch" element={<CreateBranch />} />
      </Routes>
    </div>
  );
}

export default App;
