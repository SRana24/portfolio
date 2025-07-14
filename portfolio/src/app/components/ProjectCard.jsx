'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function ProjectCard() {
    return (
        <Wrapper>
            <h2>Projects</h2>
            <List>
                {projects?.map((proj) => (
                    <Link href={`/projects/${proj.slug}`} key={proj?.slug}>
                        <Card
                            gradient={proj?.gradient}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3>{proj.title}</h3>
                            <p>{proj.summary}</p>
                            <Arrow>View More &rarr;</Arrow>
                        </Card>
                    </Link>
                ))}
            </List>
        </Wrapper>
    );
}

const cardVariants = {
    left: {
        opacity: 0,
        x: -100,
    },
    center: {
        opacity: 0,
        y: 30,
    },
    right: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};


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

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 🔥 3 columns */
  gap: 2rem;
  padding: 2rem 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr; /* 1 column on small screens */
  }
`;


const Card = styled(motion.div)`
background: ${({ gradient }) => gradient};
  color: white;
padding:  2rem;  
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  height: 100%;
  display: flex;
flex-direction: column;
justify-content: space-between;

h3 {  
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  backgroun d: linear-gradient(to right, #8e2de2, #4a00e0);
  -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
  background-clip: text ;
    text-fill-color: transparent;
  }
  
  p {  
    font-size: 1rem;  
    flex-grow: 1;  
    color: white ;   
  }  
`;

const Arrow = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  padding-top: 1rem;

${Card}:hover & {
    transform: translateX(5px);
  }
`;
