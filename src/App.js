import './App.css';
import Accordian from './components/accordian';
import ModalPopup from './components/custom-modal-popup/modal';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import CustomTabs from './components/custom-tabs/tabs';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QrCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import SearchAutocomplete from './components/search-autocomplete-with-api';
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
      {/* <TabTest /> */}

      {/* Custom Modal Popup Component */}
    {/* <ModalTest/> */}

    {/* Github Profile FInder Component */}
    {/* <GithubProfileFinder /> */}

    {/* Search Autocomplete Component */}
    <SearchAutocomplete />


      
      
    </div>
  );
}

export default App;
