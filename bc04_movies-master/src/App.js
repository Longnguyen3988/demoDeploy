import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DetailMovie from "./Pages/DetailMovie/DetailMovie";
import Layout from "./Layout/Layout";
import Spinner from "./Components/Spinner/Spinner";
import { useSelector } from "react-redux";

function App() {
  let { isLoading } = useSelector((state) => state.spinnerReducer);
  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailMovie} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
