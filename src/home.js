import './home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <div className = "header">
        <div id="firstLine">
          <p id="unipath">Unipath</p>
          <button id="feedback-btn">Feedback</button>
        </div>
      <p id="rate">Rate Clubs in</p>
      <p id="ucd">University of California, Davis</p>
    </div>

      <form id="search">
        <input type="text" id="searchbar" autoComplete="off" placeholder="Search by club, major, area of interest, etc."></input>

        {/* magnifying glass image throws error when written in stylesheet */}
        <input type="submit" id="submit" value="    Search" style={{
          backgroundImage: "url('/images/mg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top 14px left 60px',
        }}/>
      </form>

      <h2 id="results">Software Development & Design Clubs</h2>

      <section id="clubs">
        <Link to="/aggieworks" className="club-link">
            <div className="club">
            <img src="/images/aggieworks.png"></img>
            <h2 className="clubname">AggieWorks</h2>

            <div className="stars">
                <div className="rating">
                  <img src="/images/star.png"></img>
                  <h3 className="score">4.9</h3>
                  <h3>/</h3>
                  <h3>5</h3>
                </div>

                <div className="numreview">
                <p># Reviews</p>
                </div>
            </div>
          

            <p className="description">AggieWorks is a product development organization building software for students at UC Davis. We are a tight-knit community of engineers, designers, pro...</p>

            <div className="categories">
                <button className="category">Community</button>
                <button className="category">UI/UX Design</button>
            </div>
            </div>
        </Link>

        <div className="club">
          <img src="/images/codelab.png"></img>
          <h2 className="clubname">CodeLab</h2>

          <div className="stars">
            <div className="rating">
              <img src="/images/star.png"></img>
              <h3 className="score">4.8</h3>
              <h3>/</h3>
              <h3>5</h3>
            </div>

            <div className="numreview">
              <p># Reviews</p>
            </div>
          </div>

          <p className="description">We're a software development and UX design agency at UC Davis, building real-world projects for industry clients and the local community.</p>

          <div className="categories">
            <button className="category">Web Dev</button>
            <button className="category">UI/UX Design</button>
          </div>
        </div>

        <div className="club">
          <img src="/images/ddd.png"></img>
          <h2 className="clubname">Data Driven Design Chan...</h2>

          <div className="stars">
            <div className="rating">
              <img src="/images/star.png"></img>
              <h3 className="score">4.7</h3>
              <h3>/</h3>
              <h3>5</h3>
            </div>

            <div className="numreview">
              <p># Reviews</p>
            </div>
          </div>

          <p className="description">Davis Design Interactive is UC Davis’s first human-centered design organization. Our organization was founded out of a growing need to provide human-center...</p>

          <div className="categories">
            <button className="category">Design</button>
            <button className="category">UI/UX Design</button>
          </div>
        </div>

        <div className="club">
          <img src="/images/di.png"></img>
          <h2 className="clubname">Design Interactive</h2>

          <div className="stars">
            <div className="rating">
              <img src="/images/star.png"></img>
              <h3 className="score">4.6</h3>
              <h3>/</h3>
              <h3>5</h3>
            </div>

            <div className="numreview">
              <p># Reviews</p>
            </div>
          </div>

          <p className="description">Davis Design Interactive is UC Davis’s first human-centered design organization. Our organization was founded out of a growing need to provide human-center...</p>

          <div className="categories">
            <button className="category">Design</button>
            <button className="category">UI/UX Design</button>
          </div>
        </div>

        <div className="club">
          <img src="/images/googledev.png"></img>
          <h2 className="clubname">Google Developer Stude...</h2>

          <div className="stars">
            <div className="rating">
              <img src="/images/star.png"></img>
              <h3 className="score">4.5</h3>
              <h3>/</h3>
              <h3>5</h3>
            </div>

            <div className="numreview">
              <p># Reviews</p>
            </div>
          </div>

          <p className="description">Davis Design Interactive is UC Davis’s first human-centered design organization. Our organization was founded out of a growing need to provide human-center...</p>

          <div className="categories">
            <button className="category">Design</button>
            <button className="category">UI/UX Design</button>
          </div>
        </div>

        <div className="club">
          <img src="/images/include.png"></img>
          <h2 className="clubname">#include</h2>

          <div className="stars">
            <div className="rating">
              <img src="/images/star.png"></img>
              <h3 className="score">4.4</h3>
              <h3>/</h3>
              <h3>5</h3>
            </div>

            <div className="numreview">
              <p># Reviews</p>
            </div>
          </div>

          <p className="description">We are a UC Davis community of web developers and designers dedicated to fostering collaboration, growth and the creation of creative digital solutions.</p>

          <div className="categories">
            <button className="category">UI/UX Design</button>
            <button className="category">Web Dev</button>
          </div>
        </div>
      </section>

      <p id="spiel">If you like what we do, please ask your peers to use UniPath so we can expand to include clubs in culture, medical, sports, and other interests.</p>

      <footer>
        <h1>UniPath</h1>
        <p>For any questions, concerns, or inquiries, reach us through the <a href="#">feedback</a> form.</p>
      </footer>
    </div>
  );
}

export default Home;