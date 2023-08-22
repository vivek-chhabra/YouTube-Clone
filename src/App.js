import CategoriesBar from "./components/CategoriesBar";
import PageNotFound from "./components/PageNotFound";
import { Route, Routes } from "react-router-dom";
import { useToggle } from "./hooks/useToggle";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import "../src/styles/_main.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { initialAuth } from "./redux/slice/authSlice";
import { auth } from "./firebase/config";

function App() {
    // toggle hook
    const [isSidebarActive, toggleSidebar] = useToggle(false);

    // dispatch
    const dispatch = useDispatch();

    // useSelector
    const authState = useSelector((data) => data.auth);

    // checking weather weather the user is authenticated or not
    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
            dispatch(initialAuth(user));
        });

        // when component unmounts
        return unSub();
    }, []);

    return (
        <>
            {authState.isAuthReady && (
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
            )}
        </>
    );
}

export default App;
