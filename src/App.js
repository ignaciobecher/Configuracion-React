import React from "react";
import { render } from "react-dom";


const App=()=>{
    //JSX
    return(
    <React.Fragment>
       <div>
            Hola
        </div>
    </React.Fragment>
    )
};



render(React.createElement(App),document.getElementById("root"))