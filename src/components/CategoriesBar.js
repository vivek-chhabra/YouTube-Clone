import React, { useState } from "react";
import "./CategoriesBar.scss";

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

export default function CategoriesBar({isSidebarActive}) {
    // state
    const [activeElement, setActiveElement] = useState("All");

    // handle active class
    const handleClick = (value) => {
        setActiveElement(value);
    };

    return (
        <div className="CategoriesBar" style={isSidebarActive ? {transform: 'translateX(230px)'} : {transform: 'translateX(0px)'}}>
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
