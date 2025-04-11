'use client';

import React, { useState } from "react";
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
        position: "",
        title: "",
        content: "",
        tags: [],
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, tags: formData.tags.split(", ")});
        onClose();
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.modalheading}>
                    <p>Write a Review for <span className={styles.clubName}>{ club?.name }</span></p>
                    <button type="button" onClick={onClose}>+</button>
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formContent}>
                        <input type="text" className={styles.title} name="title" value={formData.date} placeholder="Enter a headline" onChange={handleChange} required />

                        <StarRatingOverall className={styles.overall} rating={formData.overall} setRating={(value) => setFormData({ ...formData, overall: value})} />

                        <StarRatingSocial className={styles.social} rating={formData.social} setRating={(value) => setFormData({ ...formData, social: value})} />

                        <input type="text" className={styles.career} name="career" value={formData.career} placeholder="Your career interest" onChange={handleChange} required />

                        <input type="text" className={styles.role} name="role" value={formData.role} placeholder="Position or role" onChange={handleChange} required />

                        <TermPick className={styles.duration} name="duration" value={formData.duration}/>

                        <TimePick className={styles.time} name="time" value={formData.time} />

                        <textarea
                            className={styles.content}
                            name="content"
                            value={formData.content}
                            placeholder="Talk about your experience! Your review will be anonymous :)"
                            onChange={handleChange}
                            required
                        />

                        <TagSelector
                        selectedTags = {formData.tags}
                        setSelectedTags={(tags) => setFormData({ ...formData, tags})}
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