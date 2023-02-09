import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarList from "./pages/CarList";
import Contacts from "./pages/Contacts";
import CreateRental from "./pages/CreateRental";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import classes from "./App.module.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="car-list" element={<CarList />} />
            <Route path="create-rental" element={<CreateRental />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
