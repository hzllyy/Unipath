"use client";

import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import Club from "./Club";

const ClubComponent = () => {
    const [reviewStats, setReviewStats] = useState({});

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'reviews'), (snapshot) => {
            const allReviews = snapshot.docs.map(doc => doc.data());
    
            const statsByClub = {};
    
            allReviews.forEach((review) => {
                const { clubID, overall, social, time } = review;
                if (!statsByClub[clubID]) {
                    statsByClub[clubID] = { totalOverall: 0, totalSocial: 0, timeCounts: {}, count: 0 };
                }
    
                statsByClub[clubID].totalOverall += overall;
                statsByClub[clubID].totalSocial += social;
                statsByClub[clubID].timeCounts[time] = (statsByClub[clubID].timeCounts[time] || 0) + 1;
                statsByClub[clubID].count += 1;
            });
    
            const formattedStats = {};
            for (const clubID in statsByClub) {
                const { totalOverall, totalSocial, timeCounts, count } = statsByClub[clubID];
                const mostCommonTime = Object.entries(timeCounts).sort((a, b) => b[1] - a[1])[0][0];
                formattedStats[clubID] = {
                    overall: (totalOverall / count).toFixed(1),
                    social: (totalSocial / count).toFixed(1),
                    time: mostCommonTime,
                    numreviews: count,
                };
            }
    
            setReviewStats(formattedStats);
        });
    
        return () => unsubscribe();
    }, []);

    return (
        <>

            <Club
                id="aggieworks"
                image="/images/aggieworks.png"
                name="AggieWorks"
                social={reviewStats["aggieworks"]?.social || "-"}
                overall={reviewStats["aggieworks"]?.overall || "-"}
                time={reviewStats["aggieworks"]?.time || "-"}
                numreviews={reviewStats["aggieworks"]?.numreviews || 0}
                description="AggieWorks is a product development organization building software for students at UC Davis. We are a tight-knit community of engineers, designers, product managers,"
                tags={["Community", "UI/UX Design"]}
            />

            <Club
                id="codelab"
                image="/images/codelab.png"
                name="CodeLab"
                social={reviewStats["codelab"]?.social || "-"}
                overall={reviewStats["codelab"]?.overall || "-"}
                time={reviewStats["codelab"]?.time || "-"}
                numreviews={reviewStats["codelab"]?.numreviews || 0}
                description="We're a software development and UX design agency at UC Davis, building real-world projects for industry clients and the local community."
                tags={["Web Dev", "UI/UX Design"]}
            />

            <Club
                id="di"
                image="/images/di.png"
                name="Design Interactive"
                social={reviewStats["di"]?.social || "-"}
                overall={reviewStats["di"]?.overall || "-"}
                time={reviewStats["di"]?.time || "-"}
                numreviews={reviewStats["di"]?.numreviews || 0}
                description="Davis Design Interactive is UC Davis’s first human-centered design organization. Our organization was founded out of a growing need to provide human-centered design a"
                tags={["Design", "UI/UX Design"]}
            />

            <Club
                id="aisc"
                image="/images/di.png"
                name="AISC"
                social={reviewStats["aisc"]?.social || "-"}
                overall={reviewStats["aisc"]?.overall || "-"}
                time={reviewStats["aisc"]?.time || "-"}
                numreviews={reviewStats["aisc"]?.numreviews || 0}
                description="Davis Design Interactive is UC Davis’s first human-centered design organization. Our organization was founded out of a growing need to provide human-center..."
                tags={["Community", "UI/UX Design"]}
            />

            <Club
                id="gdsc"
                image="/images/googledev.png"
                name="Google Developer Student Club"
                social={reviewStats["gdsc"]?.social || "-"}
                overall={reviewStats["gdsc"]?.overall || "-"}
                time={reviewStats["gdsc"]?.time || "-"}
                numreviews={reviewStats["gdsc"]?.numreviews || 0}
                description="GDSC is a program powered by Google Developers designed for students of all backgrounds to learn a wide variety of skills + technologies!"
                tags={["Design", "UI/UX Design"]}
            />

            <Club
                id="include"
                image="/images/include.png"
                name="#include"
                social={reviewStats["include"]?.social || "-"}
                overall={reviewStats["include"]?.overall || "-"}
                time={reviewStats["include"]?.time || "-"}
                numreviews={reviewStats["include"]?.numreviews || 0}
                description="Include is a student-run organization at UC Davis that builds websites and mobile apps for local organizations in the Sacramento and Davis community."
                tags={["UI/UX Design", "Web Dev"]}
            />
        </>
    );
};

export default ClubComponent;