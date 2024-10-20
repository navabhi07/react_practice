import React, { useState, useEffect } from 'react';

const Color = () => {
  const [typeofColor, settypeofColor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  const utilitynumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handlehexColor = () => {
    let val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexcol = "#";
    for (let i = 0; i < 6; i++) {
      hexcol += val[utilitynumber(val.length)];
    }
    setcolor(hexcol);
  };

  const handlergbColor = () => {
    let r = utilitynumber(256);
    let g = utilitynumber(256);
    let b = utilitynumber(256);

    setcolor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeofColor === "rgb") handlergbColor();
    else handlehexColor();
  }, [typeofColor]);

  return (
    <div style={{ backgroundColor: color }} className=" space-x-5 items-center  w-screen h-screen">
      <button onClick={() => settypeofColor("hex")} className="bg-blue-300 ml-96 font-bold py-2 px-4 rounded text-white">
        Hex Colour
      </button>
      <button onClick={() => settypeofColor("rgb")} className="bg-blue-300 font-bold py-2 px-4 rounded text-white">
        RGB Colour
      </button>
      <button
        onClick={() => (typeofColor === "hex" ? handlehexColor() : handlergbColor())}
        className="bg-blue-300 font-bold py-2 px-4 rounded text-white"
      >
        Generate Random Color
      </button>
    
    <div className='flex items-center justify-center mt-64 mr-22'>
        <h3 className='text-white font-bold text-xl mr-7'>{typeofColor==="rgb"? "Rgb Color" : "hex color"}</h3>
        <h1 className='text-white font-bold text-xl '>{color}</h1>
    </div>



    </div>
  );
};

export default Color;
