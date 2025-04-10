import React, { useState } from "react";
import styles from "./TermPick.module.css";

const TermPick = ( {className} ) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState({startTerm: "", endTerm: ""});

    const handleClick = (side) => {
        setDropdownVisible(side);
    };

    const handleSelectTerm = (side, term) => {
        setSelectedTerm((prevState) => ({
            ...prevState,
            [side]: term, 
        }));
        setDropdownVisible(false);
    };

    const terms = ["Spring", "Winter", "Fall"];
    const years = [2020, 2021, 2022, 2023, 2024, 2025]

    return (
        <div className={`${styles.termInputContainer} ${className}`}>
            <div className={styles.termInput}>
                <div className={styles.inputSide}
                onClick={() => handleClick("startTerm")}>
                    {selectedTerm.startTerm || "Start Term"}
                </div>
                <span className = {styles.separateor}>-</span>
                <div className={styles.inputSide}
                onClick={() => handleClick("endTerm")}>
                    {selectedTerm.endTerm || "End Term"}
                </div>
            </div>

            {isDropdownVisible && (
                <div className={styles.dropdown}>
                    <div className={styles.termList}>
                        {terms.map((term) =>
                            years.map((year) => (
                                <div
                                    key={`${term}-${year}`}
                                    className={styles.dropDownItem}
                                    onClick={() => handleSelectTerm(isDropdownVisible, `${term} ${year}`)}
                                >
                                    {`${term} ${year}`}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TermPick;