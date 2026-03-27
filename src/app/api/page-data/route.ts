import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/freelance-icon.svg",
        role: "Freelance Full Stack Developer",
        location: "Remote",
        startYear: "2021",
        endYear: "2023",
        bulletPoints: [
            "Built and deployed multiple client projects including e-commerce platforms using PHP, MySQL, and JavaScript",
            "Handled complete project lifecycle including development, deployment, and client requirements"
        ]
    },
]

const educationData = [
    {
        date: "2023 – 2027",
        title: "B.Tech in Computer Science Engineering (CSE)",
        subtitle: "Teerthanker Mahaveer University - Moradabad, India"
    }
];


const projectOverview = {
    caseStudies: [
        // { name: "Wellnest", url: "#" },
    ],
    sideProjects: [
        { name: "Student Portal", url: "https://amaanwarsi.thedev.id/erpportal/home.html" },
        { name: "Dar al Safa", url: "https://amaanwarsi.thedev.id/daralsafa" },
        { name: "Decorit", url: "https://amaanwarsi.thedev.id/decorit" },
        { name: "APM - Package Distribution Tool", comingSoon: true },
        { name: "async-retry-kit - Lightweight Retry Utility (NPM)", comingSoon: true },
    ]
};

const skillsData = [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "React Native",
    "Expo",

    "Express",
    "REST APIs",
    "WebSockets",
    "PHP",

    "MySQL",
    "Redis",
    "Docker",
    "CI/CD",

    "Tailwind CSS",
    "NativeWind",
    "CSS3",
    "HTML5",
    "Bootstrap",

    "Git",
    "GitHub"
];

export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview,
        skillsData
    });
};