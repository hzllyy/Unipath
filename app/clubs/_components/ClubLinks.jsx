import React from "react";
import styles from "./ClubLinks.module.css";

const ClubLinks = ({ website, websiteLabel, instagram, instagramHandle, facebook, facebookName, email, username }) => {
    return (
        <div className={styles.links}>
            { website && (
                <a href={ website} target="_blank" rel="noopener noreferrer">
                    <img src="/images/web.png" alt="website icon" />
                    {websiteLabel}
                </a>
            )}
            { instagram && (
                <a href={ instagram } target="_blank" rel="noopener noreferrer">
                    <img src="/images/instagram.png" alt="instagram icon"/>
                    {instagramHandle}
                </a>
            )}
            { facebook && (
                <a href= { facebook } target="_blank" rel="noopener noreferrer">
                    <img src="/images/facebook.png" alt="facebook icon"/>
                    {facebookName}
                </a>
            )}
            { email && (
                <a href= { email } target="_blank" rel="noopener noreferrer">
                    <img src="/images/email.png" alt="email icon" height="24" width="24"/>
                    {username}
                </a>
            )}
        </div>
    );
};

export default ClubLinks