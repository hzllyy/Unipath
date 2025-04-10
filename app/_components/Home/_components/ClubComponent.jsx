import React from "react";
import Club from "./Club";

const ClubComponent = () => {
    return (
        <>

            <Club
                image="/images/aggieworks.png"
                name="AggieWorks"
                social={4.9}
                overall={4.8} 
                time="High"
                numreviews={0}
                description="AggieWorks is a product development organization building software for students at UC Davis. We are a tight-knit community of engineers, designers, pro..."
                tags={["Community", "UI/UX Design"]}
            />

            <Club
                image="/images/codelab.png"
                name="CodeLab"
                social={4.7}
                overall={4.8}
                time="High"
                numreviews={0}
                description="We're a software development and UX design agency at UC Davis, building real-world projects for industry clients and the local community."
                tags={["Web Dev", "UI/UX Design"]}
            />

            <Club
                image="/images/di.png"
                name="Design Interactive"
                social={4.7}
                overall={4.8}
                time="Med"
                numreviews={2}
                description="Davis Design Interactive is UC Davis’s first human-centered design organization. Our organization was founded out of a growing need to provide human-center..."
                tags={["Design", "UI/UX Design"]}
            />

            <Club
                image="/images/di.png"
                name="AISC"
                social={4.7}
                overall={4.8}
                time="Med"
                numreviews={0}
                description="Davis Design Interactive is UC Davis’s first human-centered design organization. Our organization was founded out of a growing need to provide human-center..."
                tags={["Community", "UI/UX Design"]}
            />

            <Club
                image="/images/googledev.png"
                name="Google Developer Student Club"
                social={4.7}
                overall={4.8}
                time="Med"
                numreviews={0}
                description="GDSC is a program powered by Google Developers designed for students of all backgrounds to learn a wide variety of skills + technologies!"
                tags={["Design", "UI/UX Design"]}
            />

            <Club
                image="/images/include.png"
                name="#include"
                social={4.7}
                overall={4.8} 
                time="Med"
                numreviews={0}
                description="We are a UC Davis community of web developers and designers dedicated to fostering collaboration, growth and the creation of creative digital solutions."
                tags={["UI/UX Design", "Web Dev"]}
            />
        </>
    );
};

export default ClubComponent;