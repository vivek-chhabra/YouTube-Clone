import { Route, Routes } from "react-router-dom";
import "../src/styles/_main.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useToggle } from "./hooks/useToggle";
import CategoriesBar from "./components/CategoriesBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PageNotFound from "./components/PageNotFound";

function App() {
    const [isSidebarActive, toggleSidebar] = useToggle(true);

    return (
        <div className="App">
            <Navbar isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />
            <div className="middle">
                <Sidebar isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />
            <div className="categories">
                    <CategoriesBar isSidebarActive={isSidebarActive} />
                </div>
                <Routes>
                    <Route path="/" element={<Home isSidebarActive={isSidebarActive} />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
