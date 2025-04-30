import React, { useState, useRef, useEffect } from "react";
import styles from "./TermPick.module.css";

const TermPick = ({ className, value, onChange }) => {
    const [dropdownVisible, setDropdownVisible] = useState(null); // "start" or "end"
    const [selectedTerm, setSelectedTerm] = useState({
    start: "",
    end: ""
  });

  const [partialSelection, setPartialSelection] = useState({
    start: { quarter: "", year: "" },
    end: { quarter: "", year: "" }
  });

  const terms = ["Fall", "Winter", "Spring"];
  const years = [2025, 2024, 2023, 2022, 2021, 2020];
  
  const containerRef = useRef(null);

  useEffect(() => {
    if (!value) {
      setSelectedTerm({ start: "", end: "" });
      setPartialSelection({
        start: { quarter: "", year: "" },
        end: { quarter: "", year: "" }
      });
    } else {
      const [start, end] = value.split(" - ");
      setSelectedTerm({ start: start || "", end: end || "" });
    }
  }, [value]);
  

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (
            containerRef.current && !containerRef.current.contains(event.target)
        ) {
            setDropdownVisible(null);
        }
      };
    
      document.addEventListener('mousedown', handleClickOutside);
      return() => {
        document.removeEventListener('mousedown', handleClickOutside)
      };
    }, []);


  const handleQuarterSelect = (side, quarter) => {
    const updated = { ...partialSelection[side], quarter };
    setPartialSelection((prev) => ({ ...prev, [side]: updated }));

    if (updated.year) {
      finalizeTerm(side, quarter, updated.year);
    }
  };

  const handleYearSelect = (side, year) => {
    const updated = { ...partialSelection[side], year };
    setPartialSelection((prev) => ({ ...prev, [side]: updated }));

    if (updated.quarter) {
      finalizeTerm(side, updated.quarter, year);
    }
  };

  const finalizeTerm = (side, quarter, year) => {
    const newTerm = `${quarter} ${year}`;
    
    const updated = {
      ...selectedTerm,
      [side]: newTerm
    };
  
    setSelectedTerm(updated);
    setDropdownVisible(null);
    setPartialSelection((prev) => ({
      ...prev,
      [side]: { quarter: "", year: "" }
    }));
    
    if (updated.start && updated.end) {
      onChange(`${updated.start} - ${updated.end}`);
    }
  };
  

  return (
    <div className={`${styles.termInputContainer} ${className}`}>
      <div className={styles.termInput}>
        <div
          className={`${styles.inputSide} ${selectedTerm.start ? styles.selectedTerm : ""}`}
          onClick={() => setDropdownVisible("start")}
        >
          {selectedTerm.start || "Start Term"}
        </div>
        <span className={styles.separator}>-</span>
        <div
          className={`${styles.inputSide} ${selectedTerm.end ? styles.selectedTerm : ""}`}
          onClick={() => setDropdownVisible("end")}
        >
          {selectedTerm.end || "End Term"}
        </div>
      </div>

      {dropdownVisible && (
        <div ref={containerRef} className={`${styles.dropdown} ${
            dropdownVisible === "end" ? styles.endDropdown : ""
        }`}>
          <div className={styles.dropdownColumn}>
            {terms.map((term) => (
              <div
                key={term}
                className={`${styles.dropDownItem} ${
                    partialSelection[dropdownVisible].quarter === term ? styles.selected : ""
                  }`}
                onClick={() => handleQuarterSelect(dropdownVisible, term)}
              >
                {term}
              </div>
            ))}
          </div>
          <div className={styles.dropdownColumn}>
            {years.map((year) => (
              <div
                key={year}
                className={`${styles.dropDownItem} ${
                partialSelection[dropdownVisible].year === year ? styles.selected : ""}`}
                onClick={() => handleYearSelect(dropdownVisible, year)}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TermPick;
