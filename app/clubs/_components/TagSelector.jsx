import React from "react";
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
];

const TagSelector = ({ selectedTags, setSelectedTags }) => {
    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div className={styles.tags}>
            <p>Tags:</p>
            <div className={styles.tagContainer}>
                {tagOptions.map((tag) => (
                    <button
                    key={tag}
                    type="button"
                    className={`${styles.tag} ${selectedTags.includes(tag) ? styles.active : ""}`}
                    onClick={() => toggleTag(tag)}
                >
                    {tag}
                </button>
                ))}
            </div>
        </div>
    );
};

export default TagSelector;