'use client';

import React, { useState } from "react";
import { useParams } from "next/navigation";
import clubs from "../../../data/clubs";
import ClubLinks from "../_components/ClubLinks";
import WriteReview from "../_components/WriteReview";
import ReviewModal from "../_components/ReviewModal";
import styles from "./clubpage.module.css";

const ClubPage = () => {
    const params = useParams();
    const { id } = params;
    const club = clubs.find((c) => c.id === id);

    const [reviews, setReviews] = useState(club.reviews || []);
    const [selectedClub, setSelectedClub] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (club) => {
        setSelectedClub(club);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedClub(null);
    }

    const handleSubmitReview = (newReview) => {
        setReviews([...reviews, newReview]);
        handleCloseModal();
    };

    if (!club) return <h1>Club not found</h1>;

    return (
        <section className={styles.clubpage}>

            <header className={styles.clubheader}>
                <p className={styles.unipath}>ClubReview</p>

                <button className={styles.feedback}>Feedback</button>
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
                                            <p><span className={styles.label}>Career: </span>{ review.position }</p>
                                            <p><span className={styles.label}>Term: </span>{ review.duration }</p>
                                            <p><span className={styles.label}>Time Commitment: </span>{ club.time }</p>
                                        </div>

                                        <section className={styles.reviewcontent}>
                                            <h1>{ review.title }</h1>
                                            <p>{ review.content }</p>
                                        </section>
                                        <h5>
                                        <div className={styles.tags}>
                                            {review.tags.map((tag, i) => (
                                                <p key={i} className={styles.tag}>{ tag }</p>
                                            ))}
                                        </div></h5>

                                        {index !== club.reviews.length - 1 && <hr className={styles.reviewdivider}/>}

                                    </div>
                                </div>
                            ))
                        )}
                        
                    </section>
                </section>

                <section className={styles.info}>
                    <img src={ club.image } alt={`${ club.name } logo`}/>
                    <p className={styles.clubname}>{ club.name }</p>

                    <div className={styles.rating}>
                        <h3 className={styles.score}>{ club.rating }</h3>
                        <div className={styles.stars}>
                            <div className={styles.rating}>
                                <div className={styles.outof}>
                                    <h3 className={styles.score}>{ club.social }</h3>
                                    <h3>/</h3>
                                    <h3>5</h3>
                                </div>
                                <p className={styles.desc}>Social</p>
                            </div>

                            <div className={styles.rating}>
                                <div className={styles.outof}>
                                    <h3 className={styles.score}>{ club.overall }</h3>
                                    <h3>/</h3>
                                    <h3>5</h3>
                                </div>
                                <p className={styles.desc}>Overall</p>
                            </div>

                            <div className={styles.rating}>
                                <h3 className={styles.time}>{ club.time }</h3>
                                <p className={styles.desc}>Time Cmt</p>
                            </div>
                        </div>
                    </div>

                    <p className={styles.numreviews}>Based on <span className={ styles.number }> { club.numreviews } reviews</span></p>

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
                <p>For any questions, concerns, or inquiries, reach us through the <a href="ComingSoon.html">feedback</a> form.</p>
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