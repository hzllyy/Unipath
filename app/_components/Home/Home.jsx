import "./Home.css";
import React from 'react';
import ClubComponent from "./_components/ClubComponent"

export default function HomeComponent() {
    
  return (
    <div className="App">
      <div className = "header">
        <div id="firstLine">
          <p id="clubreview">ClubReview</p>
          <div id="feedback">
            <p id="feedback-txt">Share your thoughts on ClubReview.</p>
            <button id="feedback-btn">Feedback</button>
          </div>
        </div>
      <p id="rate">Rate Clubs in</p>
      <p id="ucd">University of California, Davis</p>
    </div>

      <h2 id="results">Software Development & Design Clubs</h2>

      <section id="clubs">

        <ClubComponent />
        
      </section>

      <div id="contact">
        <p id="create">Can’t find the club you’re looking for? <a href="././ComingSoon.html" className="link">Create a club page</a></p>

        <p id="spiel">If you like what we do, please ask your peers to use UniPath so we can expand to include clubs in culture, medical, sports, and other interests.
        Interested in having your club seen on UniPath? Reach out to us through our form!</p>

      </div>

      <footer>
        <h1>ClubReview</h1>
        <p>For any questions, concerns, or inquiries, reach us through the <a href="ComingSoon.html" className="link">feedback.</a></p>
      </footer>
    </div>
  );
};
