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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleSubmitReview = (newReview) => {
        setReviews([...reviews, newReview]);
    };

    if (!club) return <h1>Club not found</h1>;

    return (
        <section className={styles.clubpage}>

            <header className={styles.clubheader}>
                <p className={styles.unipath}>Unipath</p>

                {/* <form className={styles.search}>
                    <input type="text" className={styles.searchbar} autoComplete="off" placeholder="Search by club, major, area of interest, etc."></input>

                    <input type="submit" className={styles.submit} value="    Search" style={{
                    backgroundImage: "url('/images/mg.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top 11px left 60px',
                    }}/>
                </form> */}

                <button className={styles.feedback}>Feedback</button>
            </header>

            <section className={styles.content}>
                <section className={styles.info}>
                    <img src={ club.image } alt={`${ club.name } logo`}/>
                    <p className={styles.clubname}>{ club.name }</p>

                    <div className={styles.rating}>
                    <h3 className={styles.score}>{ club.rating }</h3>
                    <h3>/</h3>
                    <h3>5</h3>
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
                        <ReviewModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitReview} />

                    </div>
            
                </section>

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
                        {club.reviews.length === 0 ? (
                            <p>No reviews yet. Be the first to review!</p>
                        ) : (
                            club.reviews.map((review, index) => (
                                <div key={index} className={styles.reviews}>
                                    <div className={styles.reviews}>
                                        <div className={styles.starheader}>
                                            <div className={styles.stars}>
                                                <h1>{ review.rating } <span className={styles.outoffive}>/ 5</span> </h1>
                                                <p>Stars</p>
                                            </div>
                                            <div className={styles.starcontent}>
                                                <h1>{ review.role }</h1>
                                                <p>{ review.duration }</p>
                                                <p>{ review.position }</p>
                                            </div>

                                            <p className={styles.startdate}>Posted on { review.date }</p>
                                        </div>

                                        <section className={styles.reviewcontent}>
                                            <h1>{ review.title }</h1>
                                            <p>{ review.content }</p>
                                        </section>

                                        <div className={styles.tags}>
                                            {review.tags.map((tag, i) => (
                                                <p key={i} className={styles.tag}>{ tag }</p>
                                            ))}
                                        </div>

                                        {index !== club.reviews.length - 1 && <hr className={styles.reviewdivider}/>}

                                    </div>
                                </div>
                            ))
                        )}
                        
                    </section>
                </section>

            </section>

            <footer className={styles.footer}>
                <h1>UniPath</h1>
                <p>For any questions, concerns, or inquiries, reach us through the <a href="#">feedback</a> form.</p>
            </footer>

        </section>
    );
};

export default ClubPage;