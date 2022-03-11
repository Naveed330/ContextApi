import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/home/Home";
import Navbar from "./Components/navbar/Navbar";
import AddUsers from "./Components/addusers/AddUsers";
import EditUsers from "./Components/editUsers/EditUsers";
import UsersList from "./Components/UsersList/UsersList";
import GlobalContext from "./Components/useContext/GlobalState";
function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/AddUsers" element={<AddUsers />}></Route>
            <Route path="/EditUsers/:id" element={<EditUsers />}></Route>
            <Route path="/UsersList" element={<UsersList />}></Route>
          </Routes>
        </Router>
      </GlobalContext>
    </div>
  );
}

export default App;
