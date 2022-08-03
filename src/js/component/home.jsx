import React, { useEffect, useState } from "react";


const Home =() => {
	const [color, setColor]=useState("");

  //la luz se apaga luego de 3 segundos
setInterval(setColor, 5000);


    return(
        <div className="main-container d-flex justify-content-center">
            <div className="container">

            <div className={`circle red ${"red"==color?"active":""}`} onClick={() =>{setColor("red")}}/>
            <div className={`circle green ${"green"==color?"active":""}`} onClick={() =>{setColor("green")}}/>
            <div className={`circle yellow ${"yellow"==color?"active":""}`} onClick={() =>{setColor("yellow")}}/>

            </div>
        </div>
    );
};

export default Home;