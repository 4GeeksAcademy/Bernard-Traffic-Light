import React, { useState, useEffect } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("");

    useEffect(() => {
        const backgroundColorDiv = document.querySelector(".wholeDiv");


        backgroundColorDiv.classList.toggle("wholeDiv-red", color === "red");
        backgroundColorDiv.classList.toggle("wholeDiv-yellow", color === "yellow");
        backgroundColorDiv.classList.toggle("wholeDiv-green", color === "green");
    }, [color]);

    const clickHandler = (selectedColor) => color === selectedColor ? setColor("") : setColor(selectedColor);

    return <>
        <div className="wholeDiv container-fluid">
            <div className="light-body container pt-4 flex-column">
                <div className={`red-light mb-1 ${color === "red" ? "selected-red" : ""}`} onClick={() => clickHandler("red")}></div>
                <div className={`yellow-light mb-1 ${color === "yellow" ? "selected-yellow" : ""}`} onClick={() => clickHandler("yellow")}></div>
                <div className={`green-light mb-1 ${color === "green" ? "selected-green" : ""}`} onClick={() => clickHandler("green")}></div>
            </div>
            <div className="light-pole container"></div>
        </div>
    </>
};

export { TrafficLight };