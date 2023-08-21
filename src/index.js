import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/store";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store} >
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
