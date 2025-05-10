'use client';

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import clubs from "../../../data/clubs";
import ClubLinks from "../_components/ClubLinks";
import WriteReview from "../_components/WriteReview";
import ReviewModal from "../_components/ReviewModal";
import styles from "./clubpage.module.css";
import { collection, query, where, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../../firebase"

const ClubPage = () => {
    const params = useParams();
    const { id } = params;
    const club = clubs.find((c) => c.id === id);

    const [reviews, setReviews] = useState([]);
    const [selectedClub, setSelectedClub] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const q = query(collection(db, 'reviews'), where('clubID', '==', id));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const reviewData = snapshot.docs.map(doc => doc.data());
            setReviews(reviewData)
        });

        return() => {
            if (unsubscribe) unsubscribe();
        }

    }, [id]);

    const handleOpenModal = (club) => {
        setSelectedClub(club);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedClub(null);
    }


    const handleSubmitReview = async (newReview) => {
        try {
            await addDoc(collection(db, 'reviews'), {
                ...newReview,
                clubID: club.id  // Link the review to the current club
            });
            setReviews(prevReviews => [newReview, ...prevReviews]);
    
            handleCloseModal();
        } catch (error) {
            console.error("Error adding review: ", error);
        }
    };

    if (!club) return <h1>Club not found</h1>;

    // calculate scores and track number of reviews
    const numReviews = reviews.length;

    const avgOverall = numReviews > 0
        ? (reviews.reduce((sum, r) => sum + r.overall, 0) / numReviews).toFixed(1)
        : "-";

    const avgSocial = numReviews > 0
        ? (reviews.reduce((sum, r) => sum + r.social, 0) / numReviews).toFixed(1)
        : "-";

    const mostCommonTime = () => {
        if (reviews.length === 0) return "-";
        const count = {};
        reviews.forEach(({ time }) => {
            if (time) {
                count[time] = (count[time] || 0 ) + 1;
            }
        });
        return Object.entries(count).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    };

    return (
        <section className={styles.clubpage}>

            <header className={styles.clubheader}>
                <p className={styles.unipath}>ClubReview</p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIKK8G5mvOzDTj6HymIwQ8379AY2kytxzN1mVxyoImV4L8Rw/viewform"><button className={styles.feedback}>Feedback</button></a>
            </header>

            <section className={styles.content}>

                <section className={styles.main}>
                    <section className={styles.about}>
                        <h1>About</h1>
                        <div dangerouslySetInnerHTML={{ __html: club.about }}/>

                        <div className={styles.careers}>
                            <h4>Common Careers:</h4>
                            <div className={styles.tags}>
                                {club.careers.map((career, index) => (
                                    <p key={index} className={styles.tag}>{ career }</p>
                                ))}
                            </div>
                        </div>
                        
                        <div className={styles.careers}>
                            <h4>Top Tags:</h4>
                            <div className={styles.tags}>
                                {club.tags.map((tag, index) => (
                                    <p key={index} className={styles.tag}>{ tag }</p>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className={styles.about}>
                        <h1>Reviews</h1>
                        {reviews.length === 0 ? (
                            <p>No reviews yet. Be the first to review!</p>
                        ) : (
                            reviews.map((review, index) => (
                                <div key={index} className={styles.reviews}>
                                    <div className={styles.starheaderReview}>
                                        
                                        <div className={styles.rating}>
                                            <div className={styles.outofReview}>
                                                <h3 className={styles.scoreReview}>{ review.overall }</h3>
                                                <h3>/</h3>
                                                <h3>5</h3>
                                            </div>
                                            <p className={styles.desc}>Overall</p>
                                        </div>

                                        <div className={styles.rating}>
                                            <div className={styles.outofReview}>
                                                <h3 className={styles.scoreReview}>{ review.social }</h3>
                                                <h3>/</h3>
                                                <h3>5</h3>
                                            </div>
                                            <p className={styles.desc}>Social</p>
                                        </div>

                                    </div>

                                    <div className={styles.reviewContent}>
                                        <div className={styles.reviewheader}>
                                            <h1>{ review.role }</h1>
                                            <p className={styles.postdate}>{ review.date }</p>
                                        </div>
                                        
                                        <div className={styles.starcontent}>
                                            <p><span className={styles.label}>Career: </span>{ review.career }</p>
                                            <p><span className={styles.label}>Term: </span>{ review.duration }</p>
                                            <p><span className={styles.label}>Time Commitment: </span>{ review.time }</p>
                                        </div>

                                        <section className={styles.reviewcontent}>
                                            <h1>{ review.title }</h1>
                                            <p id="review-text">{ review.content }</p>
                                        </section>
                                        <h5>
                                        <div className={styles.tags}>
                                            {review.tags.map((tag, i) => (
                                                <p key={i} className={styles.tag}>{ tag }</p>
                                            ))}
                                        </div></h5>

                                        {index !== reviews.length - 1 && <hr className={styles.reviewdivider}/>}

                                    </div>
                                </div>
                            ))
                        )}
                        
                    </section>
                </section>

                <section className={styles.info}>
                <div className={styles.ugh}>


                    <img src={ club.image } alt={`${ club.name } logo`}/>

                    <div className={styles.ughh}>
                           
                    <p className={styles.clubname}>{ club.name }</p>

                    <div className={styles.rating}>
                        <h3 className={styles.score}>{ club.rating }</h3>
                        <div className={styles.stars}>
                            <div className={styles.rating}>
                                <div className={styles.outof}>
                                    <h3 className={styles.score}>{ avgSocial }</h3>
                                    <h3>/</h3>
                                    <h3>5</h3>
                                </div>
                                <p className={styles.desc}>Social</p>
                            </div>

                            <div className={styles.rating}>
                                <div className={styles.outof}>
                                    <h3 className={styles.score}>{ avgOverall }</h3>
                                    <h3>/</h3>
                                    <h3>5</h3>
                                </div>
                                <p className={styles.desc}>Overall</p>
                            </div>

                            <div className={styles.rating}>
                                <h3 className={styles.time}>{ mostCommonTime() }</h3>
                                <p className={styles.desc}>Time Cmt</p>
                            </div>
                        </div>
                    </div></div> 
                </div>
                    <p className={styles.numreviews}>Based on <span className={ styles.number }> { numReviews } reviews</span></p>

                    <ClubLinks
                        website={club.website}
                        websiteLabel={club.websiteLabel}
                        instagram={club.instagram}
                        instagramHandle={club.instagramHandle}
                        facebook={club.facebook}
                        facebookName={club.facebookName}
                        email={club.email}
                        username={club.username}
                    />

                    <div>
                        <WriteReview onClick={handleOpenModal} />
                    </div>

                </section>
            </section>

            <footer className={styles.footer}>
                <h1>ClubReview</h1>
                <p>For any questions, concerns, or inquiries, reach us through the <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIKK8G5mvOzDTj6HymIwQ8379AY2kytxzN1mVxyoImV4L8Rw/viewform">feedback</a> form.</p>
            </footer>

            <ReviewModal
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                onSubmit={handleSubmitReview} 
                club={club}
            />

        </section>
    );
};

export default ClubPage;