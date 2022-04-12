import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Budget from "./components/RoomsPage/Budget/Budget";
import Classic from "./components/RoomsPage/Classic/Classic";
import Double from "./components/RoomsPage/Double/Double";
import Luxury from "./components/RoomsPage/Luxury/Luxury";
import Rooms from "./components/RoomsPage/Rooms/Rooms";
import Single from "./components/RoomsPage/Single/Single";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />}>
          <Route path="single" element={<Single />} />
          <Route path="double" element={<Double />} />
          <Route path="budget" element={<Budget />} />
          <Route path="classic" element={<Classic />} />
          <Route path="luxury" element={<Luxury />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
