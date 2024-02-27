import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import "./App.css";
import StarRating from "./components/star-rating";
import ImgSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabsTest from "./components/custom-tabs/tabs-test";
import ModelTest from "./components/custom-model/model-test";
import GithubProfileFinder from "./components/github-profile-finder";

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
      <LoadMoreData />

      {/* Tree-View / Menu UI Component / Recursive Navigation Menu  */}
      <TreeView menus={menus} />

      {/* QR Code Generator */}
      <QRCodeGenerator />

      {/* Light and Dark Mode */}
      <LightDarkMode />

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs */}
      <TabsTest />

      {/* Custom Model PopUP */}
      <ModelTest />

      {/* Github Profile Finder */}
      <GithubProfileFinder />
    </div>
  );
}

export default App;
