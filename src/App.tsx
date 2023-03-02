import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Component/Navbar";
import Login from "./Component/Login";
import Counter from "./Component/Counter";
import Register from "./Component/Register";
import Home from "./Component/Home";
import CreateBranch from "./Component/CreateBranch";
import BookingPanel from "./Component/BookingPanel";
import NewOperator from "./Component/NewOperator";

function App(): JSX.Element {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/register" element={<Register />} />

        <Route path="/createBranch" element={<CreateBranch />} />
        <Route path="/bookingPanel" element={<BookingPanel />} />
        <Route path="/newOperator" element={<NewOperator />} />
      </Routes>
    </div>
  );
}

export default App;
