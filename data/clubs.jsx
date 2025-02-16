const clubs = [
    {
        id: "aggieworks",
        name: "AggieWorks",
        image: "/images/aggieworks.png",
        rating: 4.9,
        numreviews: 0,
        about: "<p>AggieWorks is a product development organization building software for students at UC Davis.</p>",
        website: "https://aggieworks.org/",
        websiteLabel: "aggieworks.org",
        instagram: "https://www.instagram.com/ucd.aggieworks/",
        instagramHandle: "@ucd.aggieworks",
        careers: ["UI Designer", "UX Designer", "Product Designer"],
        tags: ["Community", "UI Design", "UX Design"],
        reviews: []
    },
    {
        id: "codelab",
        name: "CodeLab",
        image: "/images/codelab.png",
        rating: 4.8,
        numreviews: 20,
        about: "<p>We're a software development and UX design agency at UC Davis, building real-world projects for industry clients and the local community.</p>",
        website: "https://codelab.ucdavis.edu/",
        websiteLabel: "codelab.ucdavis.edu",
        instagram: "https://www.instagram.com/ucd.codelab/",
        instagramHandle: "@ucd.codelab",
        careers: ["Frontend Developer", "Backend Developer", "Full-Stack Engineer"],
        tags: ["Web Development", "UI Design", "UX Design"],
        reviews: []
    },
    {
        id: "di",
        name: "Design Interactive",
        image: "/images/di.png",
        rating: 4.9,
        numreviews: 2,
        about: "<p>Davis Design Interactive is <strong>UC Davis's first human-centered design organization.</strong> Our organization was founded out of a growing need to provide human-centered design and user experience opportunities to students exploring the field.</p><p>Our goal is to provide and promote design education on campus in the form of hands-on projects, student-led workshops, industry panels, and more. We believe that inclusive, intersectional, and interactive design are the cornerstones of good dewsign, and our organization embodies these core values.</p>",
        website: "https://davisdi.org/",
        websiteLabel: "davisdi.org",
        instagram: "https://www.instagram.com/davisdesigninteractive/",
        instagramHandle: "@davisdesigninteractive",
        facebook: "https://www.facebook.com/davisdesigninteractive/",
        facebookName: "Davis Design Interactive",
        email: "mailto:designinteractive@gmail.com",
        username: "designinteractive@gmail.com",
        careers: ["UI Designer", "UX Designer", "Product Designer"],
        tags: ["Human Centered Design", "UI Design", "UX Design"],
        reviews: [
            {
                rating: 4,
                role: "Fellowship Member",
                duration: "Fall 2024 - Spring 2025",
                position: "Graphic Designer",
                date: "Aug. 2023",
                title: "Incredible Experience",
                content: "I joined Design Interactive my freshman year at UC Davis and it was an incredible experience! Upon entering UC Davis I was undeclared but upon completing their 3-week design sprint I learned valuable skills such as wire-framing, ux research methods, and prototyping.",
                tags: ["Beginner Friendly", "Challenging", "Teamwork"]
            },
            {
                rating: 5,
                role: "Cohort Member",
                duration: "Fall 2024",
                position: "User Experience Desiigner",
                date: "June 2023",
                title: "Challenging and Fun!",
                content: "Prior to becoming a Design Lead at Design Interactive, I was a 2x cohort participant. My experience as a cohort member challenged me to work with a variety of teams and take on different roles in the design process.",
                tags: ["Product Management", "Teamwork", "UX Design"]
            }
        ]
    }
];

export default clubs;