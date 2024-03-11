import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';


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
      <TreeView/>
      
      
    </div>
  );
}

export default App;
