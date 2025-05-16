import React, { useState, useEffect } from "react";
import styles from "./ReviewModal.module.css";
import StarRatingSocial from "./StarRatingSocial";
import StarRatingOverall from "./StarRatingOverall"
import TermPick from "./TermPick";
import TimePick from "./TimePick";
import TagSelector from "./TagSelector";

const ReviewModal = ({ isOpen, onClose, onSubmit, club }) => {
    const [formData, setFormData] = useState({
        overall: "",
        social: "",
        role: "",
        duration: "",
        title: "",
        content: "",
        tags: [],
        career: "",
        time: "",
    });

    useEffect(() => {
        if (isOpen) {
            // Reset form data when modal opens
            setFormData({
                overall: "",
                social: "",
                role: "",
                duration: "",
                title: "",
                content: "",
                tags: [],
                career: "",
                time: "",
            });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const formattedDate = date.toLocaleString('default', { month: 'short', year: 'numeric' });

        const reviewWithDate = {
            ...formData,
            date: formattedDate,
        };

        onSubmit(reviewWithDate);
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.modalheading}>
                    <p>Write a Review for <span className={styles.clubName}>{club?.name}</span></p>
                    <button type="button" onClick={onClose}>+</button>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formContent}>
                        <input
                            type="text"
                            className={styles.title}
                            name="title"
                            value={formData.title}
                            placeholder="* Enter a headline"
                            onChange={handleChange}
                            required
                        />

                        <StarRatingOverall
                            className={styles.overall}
                            rating={formData.overall}
                            setRating={(value) => setFormData({ ...formData, overall: value })}
                            required
                        />

                        <StarRatingSocial
                            className={styles.social}
                            rating={formData.social}
                            setRating={(value) => setFormData({ ...formData, social: value })}
                            required
                        />

                        <input
                            type="text"
                            className={styles.career}
                            name="career"
                            value={formData.career}
                            placeholder="Your career interest"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            className={styles.role}
                            name="role"
                            value={formData.role}
                            placeholder="* Position or role"
                            onChange={handleChange}
                            required
                        />

                        <TermPick
                            className={styles.duration}
                            name="duration"
                            value={formData.duration}
                            onChange={(value) => setFormData({ ...formData, duration: value })}
                        />

                        <TimePick
                            className={styles.time}
                            name="time"
                            value={formData.time}
                            placeholder="* Time commitment"
                            onChange={(value) => setFormData({ ...formData, time: value })}
                            required
                        />

                        <textarea
                            className={styles.content}
                            name="content"
                            value={formData.content}
                            placeholder="* Talk about your experience! Your review will be anonymous, but please remember to be respectful!"
                            onChange={handleChange}
                            required
                        />

                        <TagSelector
                            selectedTags={formData.tags}
                            setSelectedTags={(tags) => setFormData({ ...formData, tags })}
                            className={styles.tags}
                        />
                    </div>

                    <div className={styles.buttons}>
                        <button type="button" className={styles.delete} onClick={onClose}>Delete</button>
                        <button type="submit" className={styles.post}>Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
