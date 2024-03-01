import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopButton() {
  const { data, errMsg, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (errMsg) {
    return <h1>Some error Occured!! Please try again</h1>;
  }

  if (pending) {
    return <h1>Loading!! please wait </h1>;
  }

  return (
    <div>
      <h1>This is Scroll to Top and Bottom Feature</h1>
      <h3>This is the Top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>

      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <div ref={bottomRef}></div>
      <h3>This is bottom Section</h3>
    </div>
  );
}
