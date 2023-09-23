import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainPage from "./layout/MainPage";

function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}

export default App;
