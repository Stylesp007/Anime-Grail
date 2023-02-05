


export default function PostWidget() {
  

  scrapeProduct('https://www.crunchyroll.com/news')
  return (
    <div className="right-container">
      <h3 className="FS-h3">Featured Stories</h3>
      <div className="post-container" id="PostsBox">
        <ul>
          <li className="Featured-posts">
            <img src="https://www.slashfilm.com/img/gallery/chuck-norris-needed-a-push-from-steve-mcqueen-to-even-consider-a-career-in-acting/intro-1662649398.jpg" alt="" />
            <div className="post-info">
              <a href="https://github.com/Stylesp007">FEATURE: Get To Know The Characters of Vinland Saga</a>
              <div className="post-auther">Posted by Pernell</div>
              <div className="post-date"> Wednesday February 1, 2023</div>
            </div>
          </li>
          <li className="Featured-posts">
            <img src="https://www.slashfilm.com/img/gallery/chuck-norris-needed-a-push-from-steve-mcqueen-to-even-consider-a-career-in-acting/intro-1662649398.jpg" alt="" />
            <div className="post-info">
              <a href="https://github.com/Stylesp007">FEATURE: Get To Know The Characters of Vinland Saga</a>
              <div className="post-auther">Posted by Pernell</div>
              <div className="post-date"> Wednesday February 1, 2023</div>
            </div></li>
          <li className="Featured-posts">
          <img src="https://www.slashfilm.com/img/gallery/chuck-norris-needed-a-push-from-steve-mcqueen-to-even-consider-a-career-in-acting/intro-1662649398.jpg" alt="" />
            
            <div className="post-info">
              <a href="https://github.com/Stylesp007">FEATURE: Get To Know The Characters of Vinland Saga</a>
              <div className="post-auther">Posted by Pernell</div>
              <div className="post-date"> Wednesday February 1, 2023</div>
            </div>
          </li>
          <li className="Featured-posts">
          <img src="https://www.slashfilm.com/img/gallery/chuck-norris-needed-a-push-from-steve-mcqueen-to-even-consider-a-career-in-acting/intro-1662649398.jpg" alt="" />
            
            <div className="post-info">
              <a href="https://github.com/Stylesp007">FEATURE: Get To Know The Characters of Vinland Saga</a>
              <div className="post-auther">Posted by Pernell</div>
              <div className="post-date"> Wednesday February 1, 2023</div>
            </div>
          </li>
          <li className="Featured-posts">
          <img src="https://www.slashfilm.com/img/gallery/chuck-norris-needed-a-push-from-steve-mcqueen-to-even-consider-a-career-in-acting/intro-1662649398.jpg" alt="" />
            
            <div className="post-info">
              <a href="https://github.com/Stylesp007">FEATURE: Get To Know The Characters of Vinland Saga</a>
              <div className="post-auther">Posted by Pernell</div>
              <div className="post-date"> Wednesday February 1, 2023</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
