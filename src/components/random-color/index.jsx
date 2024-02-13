import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };
  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };
  
  useEffect(() => {
      
      if (typeOfColor === "rgb")handleCreateRandomRgbColor();
      else handleCreateRandomHexColor();
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        Generate HEX color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        Generate RGB color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate random color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "40px",
          flexDirection: "column",
        }}
      >
        <h3>{typeOfColor === "hex" ? "HEX COLOR" : "RGB COLOR"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
