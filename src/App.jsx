import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import TourTable from "./Components/datatable/TourTable";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Calender from "./Pages/calendar/Calender";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New title="update user" />} />
            </Route>
            <Route path="tours" element={<TourTable />} />
            <Route path="calender" element={<Calender />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
