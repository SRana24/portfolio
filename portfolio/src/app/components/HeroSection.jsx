
// 'use client';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//     return (
//         <motion.section
//             className="text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//         >
//             <p className="text-sm mb-2 text-indigo-400">Tailwind is working ✅</p>
//             <h1 className="text-4xl font-bold mb-3">Hi, I'm Saikat 👋</h1>
//             <p className="text-lg">React Native Developer • Frontend Enthusiast</p>
//         </motion.section>
//     );
// }
// 'use client';
// import { motion } from 'framer-motion';
// import CardSection from './CardSection';

// export default function HeroSection() {
//     return (
//         <motion.section
//             className="text-center py-12 px-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//         >
//             <p className="text-sm mb-2 text-indigo-400">Tailwind is working ✅</p>
//             <h1 className="text-4xl font-bold mb-3">Hi, I'm Saikat 👋</h1>
//             <p className="text-lg mb-10">React Native Developer • Frontend Enthusiast</p>

//             <CardSection />
//         </motion.section>
//     );
// }

"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import ExperienceSection from "./TechSection";
import ProjectCard from "./ProjectCard";
import profilePic from '@/app/assets/SR.jpg'
import Image from "next/image";

export default function HeroSection() {
    return (
        <Container
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >



            {/* <Intro
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <ImageWrapper>
                    <Image
                        src={profilePic}
                        alt="Saikat Rana"
                        width={220}
                        height={220}
                        priority
                    />
                </ImageWrapper>

                <motion.h1
                    className="text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Hi, I'm <Highlight>Saikat Rana</Highlight>
                </motion.h1>

                <motion.p
                    className="intro-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    A passionate <em>Frontend Developer</em> with 3+ years of experience building fast, scalable apps using <strong>React</strong>, <strong>React Native</strong>, and <strong>Next.js</strong>.
                </motion.p>

                <List
                    initial="hidden"
                    animate="visible"
                    variants={listVariants}
                >
                    <motion.li variants={itemVariants}>• Pixel-perfect UI & mobile-first design</motion.li>
                    <motion.li variants={itemVariants}>• Optimized for performance and accessibility</motion.li>
                    <motion.li variants={itemVariants}>• Integrated with APIs & Redux/Query for state</motion.li>
                    <motion.li variants={itemVariants}>• Comfortable with Git, CI/CD, and agile workflows</motion.li>
                </List>

                <motion.p
                    className="availability"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <HighlightGreen>Open to freelance & full-time opportunities.</HighlightGreen>
                </motion.p>
            </Intro> */}
            <Intro
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <ImageWrapper>
                    <Image
                        src={profilePic}
                        alt="Saikat Rana"
                        width={220}
                        height={220}
                        priority
                    />
                </ImageWrapper>
                <ContentBlock>
                    <motion.h1
                        className="text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Hi, I'm <Highlight>Saikat Rana</Highlight>
                    </motion.h1>

                    <motion.p
                        className="intro-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        A passionate <em>Frontend Developer</em> with 3+ years of experience building fast, scalable apps using <strong>React</strong>, <strong>React Native</strong>, and <strong>Next.js</strong>.
                    </motion.p>

                    <List initial="hidden" animate="visible" variants={listVariants}>
                        <motion.li variants={itemVariants}>• Pixel-perfect UI & mobile-first design</motion.li>
                        <motion.li variants={itemVariants}>• Optimized for performance and accessibility</motion.li>
                        <motion.li variants={itemVariants}>• Integrated with APIs & Redux/Query for state</motion.li>
                        <motion.li variants={itemVariants}>• Comfortable with Git, CI/CD, and agile workflows</motion.li>
                        <motion.li variants={itemVariants}>• Open to freelance & full-time opportunities.</motion.li>

                    </List>

                    {/* <motion.p
                        className="availability"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <HighlightGreen>Open to freelance & full-time opportunities.</HighlightGreen>
                    </motion.p> */}
                </ContentBlock>


            </Intro>

            <Wrapper>
                <h2>Skills</h2>
                <CardGrid>
                    <AnimatedCard
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h3>Frontend Skills</h3>
                        <p>React, Next.js, Tailwind, Framer Motion</p>
                    </AnimatedCard>

                    <AnimatedCard
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h3>Mobile Dev</h3>
                        <p>React Native, Android, iOS, Expo</p>
                    </AnimatedCard>

                    <AnimatedCard
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h3>Tools & UI</h3>
                        <p>Figma, VSCode, Git, Styled Components</p>
                    </AnimatedCard>

                    <AnimatedCard
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: false, amount: 0.2 }}

                    >
                        <h3>Work Ethic</h3>
                        <p>Clean Code, Problem Solving, UI Thinking</p>
                    </AnimatedCard>
                </CardGrid>
            </Wrapper>
            <ProjectCard />
            <ExperienceSection />

        </Container>
    );
}

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.6,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};


const Container = styled(motion.section)`
  text-align: center;
  padding: 0 2rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.section`
  padding: 3rem 1rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2.5rem;
    color: ${({ theme }) => theme.text};
  }
`;


// const Intro = styled(motion.div)`
//   padding: 3rem 2rem 3rem;
//   text-align: center;
//   max-width: 800px;
//   margin: 0 auto;

//   h1 {
//     font-size: 2.75rem;
//     font-weight: 700;
//     margin-top: 1rem;
//   }

//   .intro-text {
//     font-size: 1.2rem;
//     margin-top: 1rem;
//     color: ${({ theme }) => theme.text};
//     font-style: italic;
//     line-height: 1.7;
//   }

//   .availability {
//     margin-top: 2rem;
//     font-weight: 600;
//     font-size: 1.1rem;
//   }
// `;
const ContentBlock = styled.div`
  flex: 1;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1rem;
    color: white;
  }

  .intro-text {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.text};
    font-style: italic;
    line-height: 1.7;
  }

  .availability {
    margin-top: 2rem;
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

// const Intro = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 2rem;

//   padding: 3rem 2rem;
//   max-width: 1100px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     flex-direction: column-reverse;
//     text-align: center;
//   }
// `;

const Intro = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// const ImageWrapper = styled.div`
//   width: 220px;
//   height: 220px;
//   border-radius: 50%;
//   overflow: hidden;
//   margin: 0 auto 1.5rem;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: top center;
//     transform: scale(1.5); // Slight zoom-in effect
//   }
// `;
const ImageWrapper = styled.div`
  width: 300px;
  height: 360px;
  border-radius: 1rem; /* Rounded corners instead of full circle */
  overflow: hidden;
  margin: 0 3.5rem 0 0; /* Space between image and text (image on left) */
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.2); /* Slight zoom-in */
  }

  @media (max-width: 768px) {
    margin: 0 auto 1.5rem; /* Center on smaller screens */
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

// const AnimatedCard = styled(motion.div)`
//   width: 100%;
//   max-width: 280px;
//   padding: 1.5rem;
//   border-radius: 1rem;
//   box-shadow: 0 0 20px rgba(138, 43, 226, 0.1);
//   background: rgba(255, 255, 255, 0.05);





//   color: white;

//   h3 {
//     font-size: 1.2rem;
//     margin-bottom: 0.5rem;
//   }

//   p {
//     font-size: 0.95rem;
//     color: #e2e8f0;
//   }
// `;

const AnimatedCard = styled(motion.div)`
  width: 100%;
  max-width: 280px;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(30, 30, 30, 0.8); /* very dark semi-transparent */
  border: 1px solid rgba(138, 43, 226, 0.2); /* subtle dark purple border */
  box-shadow: 0 0 12px rgba(138, 43, 226, 0.2);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  color: white;

  &:hover {
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.6), 0 0 10px rgba(138, 43, 226, 0.4);
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  p {
    font-size: 0.95rem;
    color: #e2e8f0;
  }
`;


const Highlight = styled.span`
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-style: italic;
`;

const HighlightGreen = styled.span`
  color: #32cd32;
`;

const List = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  text-align: left;

  li {
    font-size: 1rem;
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.text};
  }
`;
//   background: linear-gradient(135deg, #1db954, #0e4429); /* Light green to dark green */
// background: linear-gradient(135deg, #1c1c1c, #444);
// background: linear-gradient(135deg, #00c6ff, #0072ff);
// background: linear-gradient(135deg, #a18cd1, #2b5876);
// background: linear-gradient(135deg, #2e2e2e, #00b894);

//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
