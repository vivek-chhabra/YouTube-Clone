import React, { useState } from "react";
import "./CategoriesBar.scss";
import { useDispatch } from "react-redux";
import { fetchVideosByCategory } from "../redux/slice/videoSlice";

// categories array,
const categories = [
    "All",
    "React JS",
    "Angular JS",
    "React Native",
    "Micro Frontends",
    "Web Packs",
    "React Spring",
    "React Virtualization",
    "Redux Toolkit",
    "Jest",
    "Caching",
    "Web Development",
    "Typescript",
    "Unit Testing",
    "Next JS",
    "Stocks",
    "Trading",
    "Investing",
    "Artificial Intelligence",
    "Algo Trading",
];

export default function CategoriesBar({ isSidebarActive }) {
    // state
    const [activeElement, setActiveElement] = useState("All");

    // dispatch
    const dispatch = useDispatch();

    // handle active class
    const handleClick = (value) => {
        setActiveElement(value);
        dispatch(fetchVideosByCategory({keyword: value}));
    };

    return (
        <div className={isSidebarActive ? "CategoriesBar active-sidebar" : "CategoriesBar"}>
            {categories.map((cate, idx) => {
                return (
                    <span className={activeElement === cate ? "cate active" : "cate"} key={idx} onClick={() => handleClick(cate)}>
                        {cate}
                    </span>
                );
            })}
        </div>
    );
}
