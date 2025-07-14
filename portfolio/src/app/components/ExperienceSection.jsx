'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { experiences } from '@/app/data/experience';

import { FaReact, FaNode, FaCss3Alt } from 'react-icons/fa';
import { SiFirebase, SiRedux, SiTailwindcss, SiTypescript, SiFlutter, SiNextdotjs, SiStorybook } from 'react-icons/si';


const techIcons = {
    "React Native": <FaReact color="#61DBFB" />,
    React: <FaReact color="#61DBFB" />,

    Firebase: <SiFirebase color="#FFA611" />,
    "Node.js": <FaNode color="#3C873A" />,
    Tailwind: <SiTailwindcss color="#38B2AC" />,
    StoryBook: <SiStorybook color="#FF4785" />,
    TypeScript: <SiTypescript color="#007ACC" />,
    Redux: <SiRedux color="#764ABC" />,
    "Next Js": <SiNextdotjs color="#000000" />,
    "Flutter UI": <SiFlutter color="#02569B" />,
};

const experiences = [
    {
        company: "We3 Tech Solutions Pvt. LTD",
        position: "React Native Developer",
        duration: "Feb 2024 - Present",
        description: [
            "I am currently contributing to end-to-end development projects, with responsibilities across frontend  systems.",
            "Collaborated with cross-functional teams to deliver projects on time",
            "Implemented responsive design principles across platform",
            "Participated in code reviews and team meetings",
        ],
        technologies: ["React Native", "Firebase", "Node.js", "Tailwind", "StoryBook", "TypeScript", "Redux"],
    },
    {
        company: "Wow Rooms Hospitality Pvt. Ltd.",
        position: "Frontend Developer",
        duration: "July 2022 - January 2024",
        description: [
            "Developed and maintained client-facing applications",
            "Contributed to six diverse projects as a Frontend Developer, handling frontend responsibilities.",
            "Developed user-friendly screens for a React Native project on both iOS and Android platforms.",
            "Worked on integration and optimization across various web applications, ensuring a seamless user experience.",
        ],
        technologies: ["React", "Next Js", "React Native", "Redux", "Redux Toolkit"],
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const fadeTop = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ExperienceCard() {
    console.log(experiences, 'gdjks');
    return (
        // <Wrapper>
        //     <motion.div
        //         variants={container}
        //         initial="hidden"
        //         animate="show"
        //     >
        //         {experiences?.map((exp, index) => (
        //             <Card
        //                 key={index}
        //                 variants={index % 2 === 0 ? fadeLeft : fadeRight}
        //                 initial="hidden"
        //                 animate="show"
        //                 whileHover={{ scale: 1.02 }}
        //             >
        //                 <Header>
        //                     <motion.h3 className="company-name">
        //                         <GradientText>{exp.company}</GradientText>
        //                     </motion.h3>
        //                     <motion.span className="duration">
        //                         <GradientTextSmall>{exp.duration}</GradientTextSmall>
        //                     </motion.span>
        //                 </Header>

        //                 <ul>
        //                     {exp.description.map((line, idx) => (
        //                         <li key={idx}>▸ {line}</li>
        //                     ))}
        //                 </ul>


        //                 <TechStack>
        //                     {exp.technologies.map((tech, i) => (
        //                         <TechBadge key={i}>{techIcons[tech]} {tech}</TechBadge>
        //                     ))}
        //                 </TechStack>
        //             </Card>
        //         ))}
        //     </motion.div>
        // </Wrapper>
        <Wrapper>
            {experiences.map((exp, index) => (
                <Card
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={index % 2 === 0 ? fadeLeft : fadeTop}
                >
                    <motion.div variants={fadeTop}>
                        <Header>
                            <motion.h3 className="company-name">
                                <GradientText>{exp.company}</GradientText>
                            </motion.h3>
                            <motion.span className="duration">
                                <GradientTextSmall>{exp.duration}</GradientTextSmall>
                            </motion.span>
                        </Header>
                    </motion.div>

                    <motion.ul variants={fadeLeft}>
                        {exp.description.map((line, idx) => (
                            <li key={idx}>▸ {line}</li>
                        ))}
                    </motion.ul>

                    <TechStack>
                        {exp.technologies.map((tech, i) => (
                            <TechBadge key={i}>
                                <TechIcon>{techIcons[tech]}</TechIcon> {tech}
                            </TechBadge>
                        ))}
                    </TechStack>
                </Card>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.section`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2.5rem;
  max-width: 800px;
  width: 100%;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.1);

  ul {
    list-style: none;
    padding-left: 0;
    margin: 1.2rem 0;

    li {
      margin-bottom: 0.5rem;
      text-align: left;
    }
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  .duration {
    display: block;
    margin-top: 0.4rem;
    font-style: italic;
    font-size: 0.95rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.4rem;
  font-weight: 700;
`;

const GradientTextSmall = styled.span`
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.2rem;
  justify-content: flex-start;
`;

// const TechBadge = styled.span`
//   background: rgba(255, 255, 255, 0.08);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   padding: 0.4rem 0.8rem;
//   border-radius: 0.5rem;
//   font-size: 0.9rem;
//   font-weight: 500;
//   color: ${({ theme }) => theme.text};
//   backdrop-filter: blur(6px);
// `;
const TechBadge = styled.span`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 0 8px rgba(138, 43, 226, 0.4); /* glow */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(138, 43, 226, 0.8);
  }
`;

const TechIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
