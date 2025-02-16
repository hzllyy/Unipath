import styles from "./Home.css";
import React from 'react';
import ClubComponent from "./_components/ClubComponent"

export default function HomeComponent() {
    
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

      {/* <form id="search">
        <input type="text" id="searchbar" autoComplete="off" placeholder="Search by club, major, area of interest, etc."></input>

        <input type="submit" id="submit" value="    Search" style={{
          backgroundImage: "url('/images/mg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top 14px left 60px',
        }}/>
      </form> */}

      <h2 id="results">Software Development & Design Clubs</h2>

      <section id="clubs">

        <ClubComponent />
        
      </section>

      <p id="spiel">If you like what we do, please ask your peers to use UniPath so we can expand to include clubs in culture, medical, sports, and other interests.</p>

      <footer>
        <h1>UniPath</h1>
        <p>For any questions, concerns, or inquiries, reach us through the feedback form.</p>
      </footer>
    </div>
  );
};
