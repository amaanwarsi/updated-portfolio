"use client";
import { useEffect, useState } from "react";

const Skills = () => {
    const [skillsData, setSkills] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/page-data");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setSkills(data?.skillsData || []);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="container">
                <div className="border-x border-t border-primary/10">
                    <div className="flex flex-col max-w-3xl gap-6 md:gap-8 mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Technical Skills</p>
                        <p className="text-sm md:text-base text-neutral-600 leading-relaxed tracking-[0.02em] flex flex-wrap px-1.5 md:px-1">
                            {skillsData.map((skill, index) => (
                                <span key={index} className="flex items-center font-medium hover:text-neutral-900 transition-colors duration-200">
                                    {skill}
                                    {index !== skillsData.length - 1 && (
                                        <span className="mx-2 text-neutral-300">•</span>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills