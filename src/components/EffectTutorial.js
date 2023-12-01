import React, { useEffect, useState } from "react";
import axios from "axios";

function EffectTutorial() {
    const [data, setData] = useState("");
    const [num, setNum] = useState(0);
    
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
                console.log("API WAS CALLED");
            });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            Hello World 
            <h1>{data}</h1>
            <p><h1>{num}</h1></p>
            <button onClick={() => {
                setNum(num + 1);
            }}> i,m button
            </button> {/* Corrected closing tag */}
        </div>
    );
}

export default EffectTutorial;
