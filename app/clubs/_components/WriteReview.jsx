'use client';

import React from "react";
import styles from "./WriteReview.module.css";

const WriteReview = ({ onClick }) => {
    return (
        <div className={styles.button}>
            <button onClick={onClick} className={styles.review}>
                Write a Review <img src="/images/write.png" alt="Write Icon" />
            </button>
        </div>
    );
};

export default WriteReview;