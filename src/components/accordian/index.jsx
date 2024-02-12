// single Accordian
// multiple Accordian
import React, { useState } from "react";
import data from "./data.js";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getElementId) => {
    setSelected(getElementId === selected ? null : getElementId);
  };

  const handleMultiSelection = (getElementId) => {
    let cpymultiple = [...multiple];
    const findeIndexOfCurrId = cpymultiple.indexOf(getElementId);
    console.log(findeIndexOfCurrId);
    if (findeIndexOfCurrId === -1) 
      cpymultiple.push(getElementId);
     else 
      cpymultiple.splice(findeIndexOfCurrId, 1);
    
    setMultiple(cpymultiple);

  };
  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multiple Option
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
                  
            </div>
          ))
        ) : (
          <div>Data Not Found!!</div>
        )}
      </div>
    </div>
  );
}
