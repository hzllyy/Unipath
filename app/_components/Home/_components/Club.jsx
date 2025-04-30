import React from "react";
import "./Club.css";
import Link from 'next/link';

const Club = ({ id, image, name, social, overall, time, numreviews, description, tags}) => {
    return (
      <Link href={`/clubs/${id}`}>
        <section className="club">
          <img src={ image } alt={`${ name } logo`} className="club-image"/>
          <h2 className="clubname">{ name }</h2>

          <div className="stars">
            <div className="rating">
              <div className="outof">
                <h3 className="score">{ social }</h3>
                <h3>/</h3>
                <h3>5</h3>
              </div>
              <p className="desc">Social</p>
            </div>

            <img src="images/line.png" alt="divider"></img>

            <div className="rating">
              <div className="outof">
                <h3 className="score">{ overall }</h3>
                <h3>/</h3>
                <h3>5</h3>
              </div>
              <p className="desc">Overall</p>
            </div>

            <img src="images/line.png" alt="divider"></img>

            <div className="rating">
              <h3 className="score">{ time }</h3>
              <p className="desc">Time Cmt</p>
            </div>
          </div>

          <p className="description">{ description }</p>

          <div className="categories">
            {tags.map((tag, index) => (
                <button key={index} className="category">
                    { tag }
                </button>
            ))}
          </div>
        </section>
        </Link>
    );
};

export default Club;