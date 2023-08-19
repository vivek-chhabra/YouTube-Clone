import { Route, Routes } from "react-router-dom";
import "../src/styles/_main.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useToggle } from "./hooks/useToggle";
import CategoriesBar from "./components/CategoriesBar";
import Home from "./pages/home/Home";

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
                    <Route path="/" element={<Home isSidebarActive={isSidebarActive} />}/>
                </Routes>
                {/* <Home isSidebarActive={isSidebarActive} /> */}
            </div>
        </div>
    );
}

export default App;
