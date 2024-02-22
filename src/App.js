import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import "./App.css";

import StarRating from "./components/star-rating";
import ImgSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />
      {/* Random-Color-Generator */}
      <RandomColor />
      {/* Star-Rating */}
      <StarRating noOfStars={10} />
      {/* Image-Slider */}
      <ImgSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      {/* Load More Data */}
      <LoadMoreData/>
    </div>
  );
}

export default App;
