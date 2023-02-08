import Header from "./Components/Header";
import PostWidget from "./Components/PostWidget";
import ContentFeed from "./Components/ContentFeed";
import './Header.css';
import './PostWidget.css';
import '../node_modules/rsuite/dist/rsuite.min.css';



function App() {
  

  return (
    <div>
      <div className="website">
        <Header />
        <ContentFeed />
        <PostWidget />
      </div>
    </div>
  )
}

export default App
