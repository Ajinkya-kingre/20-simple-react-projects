import React, { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currTabIndex, setCurrTabIndex] = useState(0);

  function handleClick(getCurrIndex) {
    setCurrTabIndex(getCurrIndex);
    onChange(getCurrIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currTabIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currTabIndex] && tabsContent[currTabIndex].content}
      </div>
    </div>
  );
}
