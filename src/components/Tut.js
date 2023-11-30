import React from 'react';

export default function Tut() {
    const person = {
        name: "Pedro",
        age:20,
        isMarried: false,
    };
    const person2 ={...person,name:"Jack"};
    const names = ["Pedro","Jack","Jessica","Carol","Pedro","kang"];
    const names2= [...names,"Joel"];
    //.map()
    //.filter()
    //.reduce()
    names.map((name)=>{
        return {name} +"1";
        
    })
    names2.filter((name)=>{
        return name !== "Pedro" 
        
    })
    
    return (
        <div>
        <p></p>
            <button onClick={() => {
                console.log("hello world");
            }}>
                Click Me
            </button>
        </div>
    );
}
