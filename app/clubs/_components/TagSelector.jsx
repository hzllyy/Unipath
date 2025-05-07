import React, { useState } from "react";
import styles from "./TagSelector.module.css";

const tagOptions = [
  "Beginner Friendly",
  "Fellowship",
  "UI/UX Design",
  "UI Design",
  "UX Design",
  "Teamwork",
  "Challenging",
  "Project Management",
  "Marketing",
  "High Time Commitment",
  "Fun",
];

const TagSelector = ({ selectedTags, setSelectedTags }) => {
  const [showTags, setShowTags] = useState(false);

  // if tag is already selected, remove it, else add 
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
        // only add the tag if less than 4 tags are selected
        if (selectedTags.length < 2) {
            setSelectedTags([...selectedTags, tag]);
        }
    }
  };

  return (
    <div className={styles.tagSelector}>

        <div className={styles.tagdiv}  onClick={() => setShowTags(!showTags)}>
              {/* toggle visibility of container */}
            <p className={styles.taglabel}>Tags:</p>

            <div className={styles.selected}>
                {selectedTags.map((tag) => (
                    <span
                        key={tag}
                        className={`${styles.selectedTag} ${
                        selectedTags.includes(tag) ? styles.active : ""
                        }`}
                        onClick={() => toggleTag(tag)}
                        disabled={!selectedTags.includes(tag) && selectedTags.length >= 3}
                    >
                    {tag}
                    </span>
                ))}
            </div>
        </div>

      {showTags && (
        <div className={styles.tagContainer}>
          {tagOptions.map((tag) => (
              <button
              type="button"
              key={tag}
              className={`${styles.tag} ${
                selectedTags.includes(tag) ? styles.active : ""
              }`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagSelector;
