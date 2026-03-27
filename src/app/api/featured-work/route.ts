import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Zaykatap - Food Ordering Platform",
        description:
            "Built a production-ready food ordering platform with a focus on performance, responsive UI, and seamless user experience for real customers.",
        roles: ["Full Stack Developer", "Frontend Engineer"],
        tech: [
            "React Native",
            "PHP",
            "Express.js",
            "WebSockets",
            "Redis",
            "Tailwind CSS",
            "Docker",
            "CI/CD",
            "Payment Integration"
        ],
        url: "https://zaykatap.in/",
        image: "/images/feature-work/zaykatap.webp",
    },
    {
        title: "Alapdorl - Custom Search Engine",
        description:
            "My first coding project — built a functional search engine with webmaster tools integration, indexing logic, and structured data handling. Focused on understanding how search systems and crawling workflows operate.",
        roles: ["Full Stack Developer"],
        tech: [
            "JavaScript",
            "PHP",
            "MySQL",
            "Web Crawling",
            "APIs",
            "DNS"
        ],
        private: true,
        highlight: "First Project",
        image: "/images/feature-work/alapdorl.webp",
    },
    {
        title: "Molt Sourcing - B2B Platform",
        description:
            "Developed a modern sourcing platform with clean UI architecture and scalable frontend, optimized for business workflows and usability.",
        roles: ["Frontend Developer"],
        tech: ["Next.js", "Tailwind"],
        url: "https://molt.amaanwarsi.tech/",
        image: "/images/feature-work/molt.webp",
    },
];
export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};