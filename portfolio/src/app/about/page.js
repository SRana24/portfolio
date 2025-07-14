import React from 'react'
import ExperienceSection from "../components/TechSection";

  
export default function About() {

    return (
        <div>

       
      <section>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
          I'm a React Native developer with over 3 years of experience building cross-platform mobile apps. I focus on performance, design, and scalability.
        </p>
      </section>
      <ExperienceSection/>
      </div>
    );
  }