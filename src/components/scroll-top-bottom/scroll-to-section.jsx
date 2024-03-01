import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef(null);

  const data = [
    {
      label: "First color",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second color",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Third color",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Foruth color",
      style: {
        width: "100%",
        height: "600px",
        background: "yellow",
      },
    },
    {
      label: "Fifth color",
      style: {
        width: "100%",
        height: "600px",
        background: "purple",
      },
    },
    {
      label: "Sixth color",
      style: {
        width: "100%",
        height: "600px",
        background: "pink",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
    top: pos,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1>Scroll to a Particular Section</h1>
      <button onClick={handleScrollToSection}>Scroll to Section</button>
      {data.map((dataItem, index) => (
        <div ref={index === 4 ? ref : null} style={dataItem.style}>
          <p>{dataItem.label}</p>
        </div>
      ))}
    </div>
  );
}
