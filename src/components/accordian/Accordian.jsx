import React, { useState } from 'react';
import data from "./data.js";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (key) => {
    setSelected(key===selected?null :key);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="accordian flex-col w-full max-w-md">
        {data && data.length > 0 ? (
          data.map((item, key) => {
            return (
              <div key={key}>
                <div
                  onClick={() => handleSingleSelection(key)}
                  className="title bg-white p-4 rounded-lg shadow-md my-2 flex justify-between items-center"
                >
                  <span>{item.question}</span>
                  <span className="font-bold text-xl">+</span>
                </div>

                {/* Conditionally render the answer based on the selected key */}
                {selected === key ? (
                  <div className="answer p-4 bg-gray-100 rounded-lg my-2">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div className="text-center">No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
