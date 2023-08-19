import { Routes } from "react-router-dom";
import "../src/styles/_main.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useToggle } from "./hooks/useToggle";
import CategoriesBar from "./components/CategoriesBar";

function App() {
    const [isSidebarActive, toggleSidebar] = useToggle(true);

    return (
        <div className="App">
            <Navbar isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />
            <div className="middle">
                <Sidebar isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar} />
                <div className="categories"><CategoriesBar isSidebarActive={isSidebarActive} /></div>
                <Routes></Routes>
            </div>
        </div>
    );
}

export default App;
