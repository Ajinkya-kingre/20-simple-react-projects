import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOutsideClick() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    setShowContent(false);
  });

  return (
    <div>
      <h1>Use Outside-Click Hook</h1>
      {showContent ? (
        <div ref={ref}>
          <h2>This is random Data</h2>
          <p>
            click outside to close this content, it won't close unless you click
            outside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
