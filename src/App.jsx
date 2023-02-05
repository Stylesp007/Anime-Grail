import Header from "./Components/Header"
import './Header.css'
import './PostWidget.css'
import '../node_modules/rsuite/dist/rsuite.min.css';
import PostWidget from "./Components/PostWidget";



function App() {
  

  return (
    <div>
      <div className="website">
        <Header />
        <PostWidget />
      </div>
    </div>
  )
}

export default App
