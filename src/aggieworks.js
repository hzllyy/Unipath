import styles from './clubpage.module.css';

function AggieWorks() {
    return (
        <div className="Aggieworks">

            <header>
                <p className={styles.unipath}>Unipath</p>

                <form className={styles.search}>
                    <input type="text" className={styles.searchbar} autoComplete="off" placeholder="Search by club, major, area of interest, etc."></input>

                    {/* magnifying glass image throws error when written in stylesheet */}
                    <input type="submit" className={styles.submit} value="    Search" style={{
                    backgroundImage: "url('/images/mg.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top 11px left 60px',
                    }}/>
                </form>

                <button className={styles.feedback}>Feedback</button>
            </header>

            <section className={styles.content}>
                <section className={styles.info}>
                    <img src="/images/aggieworks.png" alt="aggieworks"></img>
                    <p className={styles.clubname}>AggieWorks</p>

                    <div className={styles.rating}>
                    <h3 className={styles.score}>4.9</h3>
                    <h3>/</h3>
                    <h3>5</h3>
                    </div>

                    <p className={styles.numreviews}>Based on <span className={styles.number}># reviews</span></p>

                    <div className={styles.links}>
                        <a href="https://aggieworks.org/"><img src="/images/web.png" alt="web"></img>aggieworks.org</a>
                        <a href="https://www.instagram.com/ucd.aggieworks/"><img src="/images/instagram.png" alt="insta"></img>@ucd.aggieworks</a>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.review}>Write a Review <img src="/images/write.png" alt="write"></img></button>
                    </div>
                    
            
                </section>

                <section className={styles.main}>
                    <section className={styles.about}>
                        <h1>About</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <div className={styles.careers}>
                            <h4>Common Careers:</h4>
                            <div className={styles.tags}>
                                <p className={styles.tag}>UI Designer</p>
                                <p className={styles.tag}>UX Designer</p>
                                <p className={styles.tag}>Product Designer</p>
                            </div>
                        </div>
                        
                        <div className={styles.careers}>
                            <h4>Top Tags:</h4>
                            <div className={styles.tags}>
                                <p className={styles.tag}>Human Centered Design</p>
                                <p className={styles.tag}>UI Design</p>
                                <p className={styles.tag}>UX Design</p>
                            </div>
                        </div>
                    </section>

                    <section className={styles.about}>
                        <h1>Reviews</h1>
                        <div className={styles.reviews}>
                            <div className={styles.starheader}>
                                <div className={styles.stars}>
                                    <h1>4</h1>
                                    <p>Stars</p>
                                    <p className={styles.outoffive}>/ 5</p>
                                </div>
                                <div className={styles.starcontent}>
                                    <h1>Fellowship Member</h1>
                                    <p>Fall 2024 - Spring 2025</p>
                                    <p>Graphic Designer</p>
                                </div>

                                <p className={styles.stardate}>Posted on Aug. 2023</p>
                            </div>

                            <section className={styles.reviewcontent}>
                                <h1>Incredible Experience</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </section>

                            <div className={styles.tags}>
                                <p className={styles.tag}>Beginner Friendly</p>
                                <p className={styles.tag}>Challenging</p>
                                <p className={styles.tag}>Teamwork</p>
                            </div>

                        </div>
                    </section>
                </section>

            </section>

            <footer>
                <h1>UniPath</h1>
                <p>For any questions, concerns, or inquiries, reach us through the <a href="#">feedback</a> form.</p>
            </footer>

        </div>
        
    );
}

export default AggieWorks;