import React from "react";
import "./Club.scss";

const Club = ({ image, name, rating, numreviews, description, tags}) => {
    return (
        <section className="club">
          <img src={ image } alt={'${ name } logo'} className="club-image"/>
          <h2 className="clubname">{ name }</h2>

          <div className="stars">
            <div className="rating">
              <img src="/images/star.png"></img>
              <h3 className="score">{ rating }</h3>
              <h3>/</h3>
              <h3>5</h3>
            </div>

            <div className="numreview">
              <p>{ numreviews } Reviews</p>
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
    );
};

export default Club;