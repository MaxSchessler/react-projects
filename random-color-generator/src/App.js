import "./App.css";
import React, { useState } from "react";

export default function App() {
  // use state to keep track of current background color
  // set initial background color to white
  const [hexcodeBackground, setBackgroundColor] = useState("#ffffff");

  function generateButtonHandler() {
    // generate new string of random characters for # background color
    // set background color to new color
    const hexCharacters = "0123456789ABCDEF";

    // Initialize an empty hex code
    let hexCode = "#";

    // Generate 6 random characters for the hex code
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexCharacters.length);
      hexCode += hexCharacters.charAt(randomIndex);
    }

    setBackgroundColor(hexCode);
  }

  function copyToClipboard() {
    // Create a temporary textarea element to hold the hex code
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = hexcodeBackground;
    document.body.appendChild(tempTextArea);

    // Select and copy the text
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
  }

  return (
    <div className="main-container" style={{
      backgroundColor: hexcodeBackground,
       width: "100vw", 
       height: "100vh",
       textAlign: "center",
       

      }}>
      <h1 style={{padding: "50px", fontSize: "48px"}}>Random Color Generator</h1>
      <h3 style={{fontSize: "24px", padding: "20px"}}>Color: {hexcodeBackground} <button onClick={copyToClipboard} style={{backgroundColor: "white"}}>Copy</button></h3>
      <button className="gen-button" onClick={generateButtonHandler} style={{
        backgroundColor: "white",
        fontFamily: "sans-serif",
      }}>
        Generate new Color
      </button>
    </div>
  );
}
