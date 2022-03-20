import React from "react";
import { render } from "react-dom";


const App=()=>{
    //JSX
    return <div>
        hola
    </div>
};



render(React.createElement(App),document.getElementById("root"))