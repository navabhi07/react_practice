import React, { useState } from 'react';
import data from "./data.js";

const Accordiantwo = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (key) => {
    setSelected(key === selected ? null : key);
  };

  const handleMultipleSelection = (key) => {
    let cpy = [...multiple];
    const finding = cpy.indexOf(key);

    if (finding === -1) {
      cpy.push(key);
    } else {
      cpy.splice(finding, 1);
    }

    setMultiple(cpy);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button 
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)} 
        className={`font-bold py-2 px-4 rounded ${enableMultipleSelection ? 'bg-green-500' : 'bg-red-500'} text-white`}
      >
        {enableMultipleSelection ? 'Multiple Selection Enabled' : 'Enable Multiple Selection'}
      </button>

      <div className="accordian flex-col w-full max-w-md  overflow-auto">
        {data && data.length > 0 ? (
          data.map((item, key) => (
            <div key={key}>
              <div
                onClick={() => enableMultipleSelection ? handleMultipleSelection(key) : handleSingleSelection(key)}
                className="title bg-white p-4 rounded-lg shadow-md my-2 flex justify-between items-center cursor-pointer"
              >
                <span>{item.question}</span>
                <span className="font-bold text-xl">+</span>
              </div>
     
              {/* Conditionally render the answer based on the selected key */}
              {enableMultipleSelection && multiple.includes(key) ? (
                <div className="answer p-4 bg-gray-100 rounded-lg my-2">
                  {item.answer}
                </div>
              ) : selected === key ? (
                <div className="answer p-4 bg-gray-100 rounded-lg my-2">
                  {item.answer}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div className="text-center">No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordiantwo;
