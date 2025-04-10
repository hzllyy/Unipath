import React, { useState } from "react";
import styles from "./TimePick.module.css";

const TimePick = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState("Time Commitment");

    const handleSelect = (value) => {
        setSelectedTime(value);
        setDropdownVisible(false);
    };

    return(

        <div>
             <button onClick={() => setDropdownVisible(!isDropdownVisible)} className={styles.button}>
            {selectedTime}
        </button>

        {isDropdownVisible && (
            <ul className={styles.options}>
                {["Low", "Medium", "High"].map((option) => (
                    <li
                    key = {option}
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