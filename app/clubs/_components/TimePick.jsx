import React, { useState } from "react";
import styles from "./TimePick.module.css";

const TimePick = ({ value, onChange }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState(value || "Time Commitment");

    const handleSelect = (value) => {
        setSelectedTime(value);
        setDropdownVisible(false);
        if (onChange) onChange(value);  // Update the parent component state
    };

    return (
        <div className={styles.time}>
            <button
                type="button"
                onClick={() => setDropdownVisible(!isDropdownVisible)}
                className={`${styles.button} ${selectedTime !== "Time Commitment" ? styles.selected : ""}`}
            >
                {selectedTime}
            </button>

            {isDropdownVisible && (
                <ul className={styles.options}>
                    {["Low", "Med", "High"].map((option) => (
                        <li
                            key={option}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TimePick;
