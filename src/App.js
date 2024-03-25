import './App.css';
import Accordian from './components/accordian';
import TabTest from './components/custom-tabs/tab-test';
import CustomTabs from './components/custom-tabs/tabs';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QrCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';


function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian/> */}

      {/* Random Color Component */}
      {/* <RandomColor/> */}
      
      {/* {Star Rating Component} */}
      {/* <StarRating numOfStars={10}/> */}

      {/* {Image Slider Component} */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page = {'1'} limit={'4'}/> */}

      {/* {Load More Data Component} */}
      {/* <LoadMoreData/> */}

      {/* {Tree View Component} */}
      {/* <TreeView menus={menus}/> */}

      {/* {QR Code Generator Component} */}
      {/* <QrCodeGenerator /> */}

      {/* Light Dark Mode Component */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

      {/* Custom Tabs Component */}
      <TabTest />

      
      
    </div>
  );
}

export default App;
