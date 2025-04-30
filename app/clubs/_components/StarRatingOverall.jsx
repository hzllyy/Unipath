import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

const StarRatingOverall = ({ rating, setRating, className}) => {
    const [hover, setHover] = useState(0);

    return (
        <div className={`${styles.starContainer} ${className}`}>
            <span>* Overall Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                    key={star}
                    className={styles.star}
                    color={(hover || rating) >= star? "#582EC3" : "#ccc"}
                    size={22}
                    cursor="pointer"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                />
            ))}
        </div>
    );
};

export default StarRatingOverall;