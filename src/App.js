import { Routes } from "react-router-dom";
import "../src/styles/_main.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="middle">
                <Sidebar />
                <Routes></Routes>
            </div>
        </div>
    );
}

export default App;
