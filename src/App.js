import CategoriesBar from "./components/CategoriesBar";
import PageNotFound from "./components/PageNotFound";
import { Route, Routes } from "react-router-dom";
import { useToggle } from "./hooks/useToggle";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import "../src/styles/_main.scss";


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
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
