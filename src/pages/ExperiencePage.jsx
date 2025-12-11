import { About } from "../components";
import { useEffect, useState } from "react";

const ExperiencePage = () => {
    // We can reuse the About component but force the 'experience' tab to be active
    // However, the About component manages its own state. 
    // Ideally we should refactor About to accept an initial tab prop, or just render About and let user navigate.
    // But the user wants "Experience" page.
    // Let's check About.jsx again. It has tabs: skills, experience, approach.

    // Since About.jsx doesn't accept props for activeTab, we might need to modify it or just render About.
    // For now, let's just render About, but maybe we can modify About.jsx to accept a prop.

    return (
        <section>
            <About initialTab="experience" />
        </section>
    )
};

export default ExperiencePage;
