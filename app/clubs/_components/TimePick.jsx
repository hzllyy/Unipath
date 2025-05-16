import React, { useState } from "react";
import styles from "./TimePick.module.css";

const TimePick = ({ value, onChange, required }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState(value || "");

    const handleSelect = (value) => {
        setSelectedTime(value);
        setDropdownVisible(false);
        if (onChange) onChange(value);
    };

    return (
        <div className={styles.time}>
            <select
                value={selectedTime}
                onChange={(e) => handleSelect(e.target.value)}
                required={required}
                className={`${styles.button} ${selectedTime ? styles.selected : ""}`}
            >
                <option value="">Time Commitment</option>
                <option value="Low">Low</option>
                <option value="Med">Med</option>
                <option value="High">High</option>
            </select>
        </div>
    );
};

export default TimePick;
