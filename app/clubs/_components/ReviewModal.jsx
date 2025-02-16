'use client';

import React, { useState } from "react";
import styles from "./ReviewModal.module.css";
import clubs from  "../../../data/clubs";

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        rating: "",
        role: "",
        duration: "",
        position: "",
        title: "",
        content: "",
        tags: "",
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
                    <p>Write a Review for { clubs.name }</p>
                    <button type="button" onClick={onClose}>+</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" className={styles.title} name="title" value={formData.date} placeholder="Enter a headline" onChange={handleChange} required />
                    <input type="text" name="career" value={formData.career} placeholder="Your career interest" onChange={handleChange} required />
                    <input type="text" name="role" value={formData.role} placeholder="Position or role" onChange={handleChange} required />
                    <input type="text" name="content" value={formData.content} placeholder="Talk about your experience! Your review will be anonymous :)" onChange={handleChange} required />

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